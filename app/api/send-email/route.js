import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, phone, arrivalDate, stayDuration, message, adresse, chooseRoom } = body;

  // Configurez le transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    host: "mail01.swisscenter.com",
    port: 465,
    secure: true,
    auth: {
      user: "reservation@popliving.ch",
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // Contenu de l'email
    const mailOptions = {
      from: "reservation@popliving.ch",
      to: "info@campus-gerance.ch",
      subject: "PopLiving Riaz - Demande de Disponibilité",
      text: `
        Vous avez reçu une nouvelle demande de disponibilité :
        - Prénom : ${firstName}
        - Nom : ${lastName}
        - Adresse : ${adresse}
        - Email : ${email}
        - Téléphone : ${phone}
        - Date d'arrivée : ${arrivalDate}
        - Durée du séjour : ${stayDuration}
        - Choix de chambre : ${chooseRoom}
        - Message : ${message}
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return NextResponse.json({ message: "Erreur lors de l'envoi de l'email." }, { status: 500 });
  }
}
