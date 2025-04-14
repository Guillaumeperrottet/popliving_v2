import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, arrivalDate, stayDuration, message } = req.body;

    // Configurez le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: "mail01.swisscenter.com", // Serveur SMTP
      port: 465, // Port SSL
      secure: true, // Utilise SSL
      auth: {
        user: "reservation@popliving.ch", // Adresse email utilisée pour l'envoi
        pass: process.env.SMTP_PASSWORD, // Mot de passe défini dans les variables d'environnement
      },
    });

    try {
      // Contenu de l'email
      const mailOptions = {
        from: "reservation@popliving.ch", // Adresse de l'expéditeur
        to: "info@campus-gerance.ch", // Adresse du destinataire
        subject: "PopLiving Riaz - Demande de Réservation",
        text: `
          Vous avez reçu une nouvelle demande de disponibilité :
          - Prénom : ${firstName}
          - Nom : ${lastName}
          - Email : ${email}
          - Téléphone : ${phone}
          - Date d'arrivée : ${arrivalDate}
          - Durée du séjour : ${stayDuration}
          - Message : ${message}
        `,
      };

      // Envoyer l'email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée." });
  }
}
