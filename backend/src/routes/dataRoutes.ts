import express from 'express';
import { getAllUsers } from '../controllers/dataController';

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

export default router;
