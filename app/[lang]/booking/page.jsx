"use client";

import Navbar from "@/components/Navbar";
import { useTranslation } from "@/app/i18n/client";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Booking() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    arrivalDate: "",
    chooseRoom: "chambre simple",
    chooseStorage: "xs", // Valeur par défaut pour le scroll direct
    bookingType: "room",
    stayDuration: "1 semaine",
    adresse: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingTypeChange = (type) => {
    setFormData({
      ...formData,
      bookingType: type,
      chooseRoom: type === "room" ? "chambre simple" : "",
      chooseStorage: type === "storage" ? "xs" : "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push(`/${lang}/thanks`);
      } else {
        console.error(t("booking.error_log"));
        toast.error(t("booking.failure"));
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(t("booking.failure"));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#form-xs" || hash === "#form-m" || hash === "#form-xl") {
        setFormData((prev) => ({
          ...prev,
          bookingType: "storage",
          chooseStorage: hash.replace("#form-", ""),
        }));
      }
    }
  }, []);

  // Ajout dynamique de l'id pour le scroll depuis la page stockage
  const formId =
    formData.bookingType === "storage"
      ? `form-${formData.chooseStorage}`
      : undefined;

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-8 py-22">
        <h1 className="text-center text-3xl font-bold mb-8">
          {t("booking.request_availability")}
        </h1>

        {/* Options de type de réservation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => handleBookingTypeChange("room")}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                formData.bookingType === "room"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {t("booking.room_option")}
            </button>
            <button
              type="button"
              onClick={() => handleBookingTypeChange("storage")}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                formData.bookingType === "storage"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {t("booking.storage_option")}
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          id={formId} // <-- Ajout dynamique de l'id
        >
          {/* Section spécifique à la chambre */}
          {formData.bookingType === "room" && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                {t("booking.choose_room")}
              </h2>
              <select
                name="chooseRoom"
                value={formData.chooseRoom}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded w-full"
              >
                <option value="chambre simple">
                  {t("booking.room_types.simple")}
                </option>
                <option value="studio independant">
                  {t("booking.room_types.studio")}
                </option>
                <option value="appartement partage">
                  {t("booking.room_types.shared")}
                </option>
              </select>
            </>
          )}

          {/* Section spécifique au stockage */}
          {formData.bookingType === "storage" && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                {t("booking.choose_storage")}
              </h2>
              <select
                name="chooseStorage"
                value={formData.chooseStorage}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded w-full"
              >
                <option value="xs">{t("booking.storage_types.xs")}</option>
                <option value="m">{t("booking.storage_types.m")}</option>
                <option value="xl">{t("booking.storage_types.xl")}</option>
              </select>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <h2 className="text-xl font-semibold mb-4">
              {t("booking.check_in_date")}
            </h2>
            <input
              type="date"
              name="arrivalDate"
              placeholder={t("booking.check_in_date")}
              value={formData.arrivalDate}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded"
              required
            />
            <h2 className="text-xl font-semibold mb-4">
              {t("booking.stay_duration")}
            </h2>
            <select
              name="stayDuration"
              value={formData.stayDuration}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded w-full"
            >
              <option value="1 semaine">
                {t("booking.durations.one_week")}
              </option>
              <option value="1 mois">{t("booking.durations.one_month")}</option>
              <option value="2 mois et plus">
                {t("booking.durations.two_months_plus")}
              </option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder={t("booking.first_name")}
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder={t("booking.last_name")}
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder={t("booking.email")}
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("booking.phone")}
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            required
          />
          <input
            type="text"
            name="adresse"
            placeholder={t("booking.address")}
            value={formData.adresse}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            required
          />
          <textarea
            name="message"
            placeholder={t("booking.message_placeholder")}
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded transition-colors duration-300"
            style={{ cursor: "pointer" }}
          >
            {t("booking.submit")}
          </button>
        </form>
      </main>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "white",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </>
  );
}
