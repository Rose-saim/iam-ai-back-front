import express from 'express';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Configuration OAuth2 avec les variables d'environnement
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);
oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

async function sendMail(name: string, organization: string, email: string, message: string) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Message de ${name}`,
      text: `Organisation : ${organization}\nEmail : ${email}\nMessage : ${message}`,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw new Error(error as string);
  }
}

app.post('/send-email', async (req, res) => {
  const { name, organization, email, message } = req.body;
  try {
    const result = await sendMail(name, organization, email, message);
    res.status(200).send('E-mail envoyé !');
  } catch (error) {
    console.error(error);
    res.status(500).send("Échec de l'envoi de l'e-mail.");
  }
});

app.listen(5000, () => console.log('Backend démarré sur le port 5000'));
