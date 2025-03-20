"use client";

import React from "react";
import { useTheme } from "next-themes"; // Pour détecter le mode actuel

const ThemedButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { theme } = useTheme(); // Récupère le mode actuel (light/dark)

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-lg font-semibold rounded-md transition-all 
        ${
          theme === "dark"
            ? "bg-gray-800 text-white border border-gray-700 shadow-md shadow-gray-900 hover:bg-gray-700 active:shadow-inner"
            : "bg-gray-200 text-gray-900 border border-gray-300 shadow-md shadow-gray-400 hover:bg-gray-300 active:shadow-inner"
        }`}
    >
     Search
    </button>
  );
};

export default ThemedButton;
