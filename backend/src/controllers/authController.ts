import { Request, Response } from 'express';
import passport from 'passport';

// Redirection initiale vers Google OAuth
export const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

// Callback après la connexion Google OAuth
export const googleCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  session: false,
}), (req: Request, res: Response) => {
  const token = req.user?.token; // Générez ou récupérez un JWT ici
  res.redirect(`http://localhost:3000/dashboard?token=${token}`);
};

// Redirection initiale vers GitHub OAuth
export const githubAuth = passport.authenticate('github', {
  scope: ['user:email'],
});

// Callback après la connexion GitHub OAuth
export const githubCallback = passport.authenticate('github', {
  failureRedirect: '/login',
  session: false,
}), (req: Request, res: Response) => {
  const token = req.user?.token; // Générez ou récupérez un JWT ici
  res.redirect(`http://localhost:3000/dashboard?token=${token}`);
};

