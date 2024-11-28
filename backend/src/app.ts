import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import passport from './config/passport';
import authRoutes from './routes/authRoutes';
import dataRoutes from './routes/dataRoutes';
import data from './routes/data';
import cors from 'cors';

dotenv.config(); // Charger les variables d'environnement

const app = express();

// Configuration de CORS (important de le mettre avant les sessions)
app.use(
  cors({
    origin: 'http://localhost:5173', // Remplacez par l'URL de votre frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Autorisez les méthodes nécessaires
    credentials: true, // Autorisez l'envoi des cookies
  })
);

// Middleware pour traiter les corps de requête JSON et URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration des sessions
app.use(
  session({
    secret: process.env.COOKIE_SECRET || 'default-secret', // Clé secrète pour chiffrer les cookies
    resave: false, // Ne pas sauvegarder la session si elle n'a pas changé
    saveUninitialized: false, // Ne pas sauvegarder de sessions vides
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Cookies sécurisés en production
      httpOnly: true, // Empêcher l'accès au cookie via JavaScript
      maxAge: 24 * 60 * 60 * 1000, // Durée de vie : 24 heures
      sameSite: 'lax', // Protection contre les attaques CSRF
    },
  })
);

// Initialisation de Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Routes principales
app.use('/auth', authRoutes); // Routes d'authentification
app.use('', data); // Routes d'authentification
app.use('', dataRoutes); // Routes d'authentification

// Route de vérification
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('API opérationnelle');
});

// Middleware pour gérer les routes non trouvées
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route non trouvée',
    message: 'Vérifiez l’URL et réessayez.',
  });
});

// Middleware global pour la gestion des erreurs
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Erreur:', err.message);
  res.status(500).json({
    error: 'Une erreur interne est survenue.',
    message: err.message,
  });
});

export default app;
