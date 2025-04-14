"use client";

import Navbar from '@/components/Navbar';
import { useState } from "react";


export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    arrivalDate: "",
    chooseRoom: "chambre simple",
    stayDuration: "1 semaine",
    adresse: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        alert('Votre demande a été envoyée avec succès ! Un email a été transmis.');
      } else {
        console.error('Erreur lors de l\'envoi de l\'email');
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
      alert('Une erreur réseau est survenue. Veuillez réessayer.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-8 py-22">
        <h1 className="text-center text-3xl font-bold mb-8">Demande de disponibilité</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Choisissez votre chambre</h2>
          <select
            name="chooseRoom"
            value={formData.chooseRoom}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
          >
            <option value="chambre simple">Chambre simple</option>
            <option value="studio independant">Studio indépendant</option>
            <option value="appartement partage">Appartement partagé</option>
          </select>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h2 className="text-xl font-semibold mb-4">Date d'arrivée</h2>
            <input
              type="date"
              name="arrivalDate"
              placeholder="Date d'arrivée"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded"
              required
            />
            <h2 className="text-xl font-semibold mb-4">Durée du séjour</h2>
            <select
                name="stayDuration"
                value={formData.stayDuration}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded w-full"
              >
                <option value="1 semaine">1 semaine</option>
                <option value="1 mois">1 mois</option>
                <option value="2 mois et plus">2 mois et plus</option>
              </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            required
          />
          <input
            type="text"
            name="adresse"
            placeholder="Adresse"
            value={formData.adresse}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Laissez un message..."
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded transition-colors duration-300"
          >
            Envoyer
          </button>
        </form>
      </main>
    </>
  );
}
