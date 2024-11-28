import { Pool } from 'pg'; // PostgreSQL client pour Node.js
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

// Récupérer l'URL de la base de données
const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error('DATABASE_URL n’est pas définie dans le fichier .env');
}

// Créer une instance de connexion à la base de données
const pool = new Pool({
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false, // Nécessaire pour certaines configurations cloud comme Heroku
  },
});

// Tester la connexion
pool.connect()
  .then(() => console.log('Connecté à la base de données PostgreSQL'))
  .catch((err) => console.error('Erreur de connexion à la base de données :', err));

// Exporter le pool pour être utilisé dans d'autres parties de l'application
export default pool;

