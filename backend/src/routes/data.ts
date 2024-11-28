import express from 'express';
import passport from '../config/passport';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const router = express.Router();
const prisma = new PrismaClient();


router.post('/select-account-type', async (req, res) => {

    const { token, role } = req.body;
    if (!token || !role) {
      return res.status(400).json({ message: 'Token and account type are required' });
    }
  
    try {
      // Vérifie et décode le token
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
  
      // Trouve l'utilisateur dans la base de données
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Met à jour le type de compte de l'utilisateur
      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { role },
      });
  
      // Génère un nouveau token
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
  
export default router;