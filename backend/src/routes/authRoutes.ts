import express from 'express';
import passport from '../config/passport';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer';

const router = express.Router();
const prisma = new PrismaClient();

// Génération d'un mot de passe temporaire aléatoire
const generateTempPassword = (): string => crypto.randomBytes(6).toString('hex');

// Fonction d'envoi d'email
const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // À remplacer si nécessaire
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw new Error('Email sending failed');
  }
};

// Route Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback Google OAuth
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  async (req, res) => {
    if (!req.user) {
      return res.status(401).send('Authentication failed');
    }

    try {
      const user = req.user as any;
      const userProfile = {
        id: user.profile.id,
        email: user.profile.emails[0].value,
        name: user.profile.displayName,
      };

      const firstName = user.profile.name.givenName;
      const lastName = user.profile.name.familyName;

      // Vérifier si l'utilisateur existe
      let dbUser = await prisma.user.findUnique({
        where: { email: userProfile.email },
      });

      if (!dbUser) {
        // Création de l'utilisateur s'il n'existe pas
        const tempPassword = generateTempPassword();
        const passwordHash = await bcryptjs.hash(tempPassword, 10);

        dbUser = await prisma.user.create({
          data: {
            id: userProfile.id,
            email: userProfile.email,
            role: '', // Rôle vide par défaut
            passwordHash,
            profile: {
              create: {
                firstName,
                lastName,
              },
            },
          },
        });

        // Redirection vers la sélection du type de compte
        const payload = { id: dbUser.id, email: dbUser.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });

        return res.redirect(`http://localhost:5173/select-account-type?token=${token}`);
      }

      // Mise à jour des informations de l'utilisateur si nécessaire
      dbUser = await prisma.user.update({
        where: { email: userProfile.email },
        data: {
          profile: {
            update: {
              firstName,
              lastName,
            },
          },
        },
      });

      // Vérifier si l'utilisateur a déjà un rôle
      if (!dbUser.role) {
        // Redirection vers la sélection du type de compte si aucun rôle n'est défini
        const payload = { id: dbUser.id, email: dbUser.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });

        return res.redirect(`http://localhost:5173/select-account-type?token=${token}`);
      }

      // Redirection vers le tableau de bord correspondant au rôle
      const payload = { id: dbUser.id, email: dbUser.email, role: dbUser.role };
      const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
      let dashboardPath = '';
      switch (dbUser.role) {
        case 'B2B':
          dashboardPath = '/dashboard/business';
          break;
        case 'B2C':
          dashboardPath = '/dashboard/individual';
          break;
        case 'expert':
          dashboardPath = '/dashboard/expert';
          break;
        default:
          return res.status(400).send('Invalid role');
      }

      const newToken = jwt.sign(
        { id: dbUser.id, role: dbUser.role },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' }
      );
      console.log(newToken)
      return res.redirect(`http://localhost:5173${dashboardPath}?token=${newToken}`);
    } catch (error) {
      console.error('Erreur lors du traitement du callback Google:', error);
      res.status(500).send('Internal server error');
    }
  }
);


// Route de gestion du type de compte
router.post('/select-account-type', async (req, res) => {
  const { token, accountType } = req.body;
  if (!token || !accountType) {
    return res.status(400).json({ message: 'Token and account type are required' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { role: accountType },
    });

    const newToken = jwt.sign(
      { id: updatedUser.id, role: updatedUser.role },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    res.json({ token: newToken, message: 'Account type updated successfully' });
  } catch (error) {
    console.error('Error selecting account type:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route pour changement de mot de passe
router.post('/change-password', async (req, res) => {
  const { userId, currentPassword, newPassword } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur introuvable' });
    }

    const isMatch = await bcryptjs.compare(currentPassword, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe actuel incorrect' });
    }

    const newHashedPassword = await bcryptjs.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: userId },
      data: { passwordHash: newHashedPassword },
    });

    res.status(200).json({ message: 'Mot de passe modifié avec succès' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/verify-token', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Token manquant' });
  }
  
  const token = authHeader.split(' ')[1]; // Récupère le token Bearer
  try {
    // Vérifie le token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // Récupère l'utilisateur correspondant dans la base de données
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    console.log("Utilisateur vérifié:", user);

    // Renvoie l'utilisateur et confirme la validité du token
    res.status(200).json({ user });
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      console.log("Token expiré, génération d'un nouveau token...");

      try {
        const expiredPayload: any = jwt.decode(token);
        if (!expiredPayload) {
          return res.status(401).json({ message: 'Token invalide ou expiré' });
        }

        // Regénère un nouveau token
        const newToken = jwt.sign(
          { id: expiredPayload.id, email: expiredPayload.email, role: expiredPayload.role },
          process.env.JWT_SECRET!,
          { expiresIn: '1h' }
        );

        // Récupère l'utilisateur pour confirmer son existence
        const user = await prisma.user.findUnique({ where: { id: expiredPayload.id } });
        if (!user) {
          return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        console.log("Utilisateur retrouvé après expiration:", user);

        // Renvoie l'utilisateur et le nouveau token
        res.status(200).json({ user, token: newToken });
      } catch (renewError) {
        console.error('Erreur lors de la régénération du token:', renewError);
        return res.status(500).json({ message: 'Erreur serveur interne' });
      }
    } else {
      console.error('Erreur de vérification du token:', error);
      res.status(401).json({ message: 'Token invalide ou expiré' });
    }
  }
});

export default router;
