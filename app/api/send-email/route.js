import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const {
    firstName,
    lastName,
    email,
    phone,
    arrivalDate,
    stayDuration,
    message,
    adresse,
    chooseRoom,
    chooseStorage,
    bookingType,
  } = body;

  // Fonction pour traduire les valeurs en français pour l'email
  const translateValues = {
    // Types de chambres
    "chambre simple": "Chambre simple",
    "studio independant": "Studio indépendant",
    "appartement partage": "Appartement partagé",

    // Types d'espaces de stockage
    xs: "XS - Petit espace (5-7m³)",
    m: "M - Espace moyen (11-16m³)",
    xl: "XL - Grand espace (27-39m³)",

    // Durées
    "1 semaine": "1 semaine",
    "1 mois": "1 mois",
    "2 mois et plus": "2 mois et plus",
  };

  // Configurez le transporteur Nodemailer
  const transporter = nodemailer.createTransporter({
    host: "mail01.swisscenter.com",
    port: 465,
    secure: true,
    auth: {
      user: "reservation@popliving.ch",
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    let emailContent;

    if (bookingType === "storage") {
      const storageTypeTranslated =
        translateValues[chooseStorage] || chooseStorage;
      const durationTranslated = translateValues[stayDuration] || stayDuration;

      emailContent = `
        Vous avez reçu une nouvelle demande de disponibilité pour un ESPACE DE STOCKAGE :
        
        INFORMATIONS CLIENT :
        - Prénom : ${firstName}
        - Nom : ${lastName}
        - Adresse : ${adresse}
        - Email : ${email}
        - Téléphone : ${phone}
        
        DÉTAILS DE LA DEMANDE :
        - Type : Espace de stockage
        - Taille d'espace : ${storageTypeTranslated}
        - Date d'arrivée souhaitée : ${arrivalDate}
        - Durée estimée : ${durationTranslated}
        
        MESSAGE DU CLIENT :
        ${message || "Aucun message spécifique"}
      `;
    } else {
      const roomTypeTranslated = translateValues[chooseRoom] || chooseRoom;
      const durationTranslated = translateValues[stayDuration] || stayDuration;

      emailContent = `
        Vous avez reçu une nouvelle demande de disponibilité pour une CHAMBRE :
        
        INFORMATIONS CLIENT :
        - Prénom : ${firstName}
        - Nom : ${lastName}
        - Adresse : ${adresse}
        - Email : ${email}
        - Téléphone : ${phone}
        
        DÉTAILS DE LA DEMANDE :
        - Type : Chambre/Studio
        - Choix de logement : ${roomTypeTranslated}
        - Date d'arrivée souhaitée : ${arrivalDate}
        - Durée estimée du séjour : ${durationTranslated}
        
        MESSAGE DU CLIENT :
        ${message || "Aucun message spécifique"}
      `;
    }

    const mailOptions = {
      from: "reservation@popliving.ch",
      to: "info@campus-gerance.ch",
      subject:
        bookingType === "storage"
          ? "PopLiving Riaz - Demande d'Espace de Stockage"
          : "PopLiving Riaz - Demande de Logement",
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}
