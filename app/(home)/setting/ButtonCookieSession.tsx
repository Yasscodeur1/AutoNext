"use client";

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ButtonCookieSession() {
  const handleCreateCookieSession = async () => {
    try {
      const response = await fetch("/api/cookieSession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cookieName: "CookieSession",
          cookieValue: "CookieSessionValue",
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création du cookie");
      }

      toast.success("✅ CookieSession créé avec succès !");
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("❌ Échec de la création du cookie.");
    }
  };

  return (
    <div>
      <button onClick={handleCreateCookieSession} className="text-gray-900 dark:text-gray-100 px-4 py-2 rounded">
        Créer un cookie de session
      </button>
    </div>
  );
}
