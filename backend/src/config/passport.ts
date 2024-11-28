import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import dotenv from 'dotenv'

dotenv.config()
// // Vérification des variables d'environnement
// if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
//   throw new Error('Google OAuth configuration is missing in environment variables!');
// }
// if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
//   throw new Error('GitHub OAuth configuration is missing in environment variables!');
// }
// if (!process.env.API_URL) {
//   throw new Error('API_URL is missing in environment variables!');
// }

// Configuration de la stratégie Google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: `${process.env.API_URL}/auth/google/callback`,
      scope: ['profile', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      // Logique pour trouver ou créer l'utilisateur dans la base
      return done(null, { profile, token: accessToken });
    }
  )
);

// Configuration de la stratégie GitHub
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      callbackURL: `${process.env.API_URL}/auth/github/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('GitHub profile:', profile);
      // Logique pour trouver ou créer l'utilisateur dans la base
      return done(null, { profile, token: accessToken });
    }
  )
);

// Sérialisation et désérialisation des utilisateurs pour les sessions (si utilisé)
passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

export default passport;

