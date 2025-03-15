"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Header";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, useTheme } from "next-themes";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme(); // Récupère le thème actuel (light ou dark)

  // Pour éviter l'erreur de SSR, on attend que le composant soit monté côté client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ne rien afficher jusqu'à ce que le composant soit monté
  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-background min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <ToastContainer position="bottom-right" autoClose={3000} />
            <Footer />
          </div>
        </ThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;


