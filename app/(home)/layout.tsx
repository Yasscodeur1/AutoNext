"use client"

import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Header';
import Footer from '@/Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from 'next-themes';

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
    <div
      className={`w-full h-screen flex flex-col items-center ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}
    >
      <Navbar />
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </div>
  );
};

export default Layout;
