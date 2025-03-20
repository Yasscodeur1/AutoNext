"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, useTheme } from "next-themes";
import { FavoritesProvider } from "../../Components/context/FavoritesContext";
import { CartProvider } from "../../Components/context/CartContextType";
import { AuthProvider } from "../../Components/context/AuthContext";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  // const { theme } = useTheme(); // Récupère le thème actuel (light ou dark)

  // Pour éviter l'erreur de SSR, on attend que le composant soit monté côté client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ne rien afficher jusqu'à ce que le composant soit monté
  if (!mounted) return null;

  return (
    <AuthProvider>
      <FavoritesProvider>
        <CartProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="bg-background w-full min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow pt-[80px] mx-10">
                {children}
              </main>
              <ToastContainer position="bottom-right" autoClose={3000} />
              <Footer />
            </div>
          </ThemeProvider>
        </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
};

export default Layout;
