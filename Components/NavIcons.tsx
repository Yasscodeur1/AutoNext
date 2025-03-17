"use client";

import Link from "next/link"; // Correction ici
import { useRouter } from "next/navigation"; // Correction ici
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartModal from "./CartModal";
import { MdFavorite } from "react-icons/md";
import FavoritesModal from "./FavoritesModal";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Ajout d'un état pour le profile
  const [isCartOpen, setIsCartOpen] = useState(false); // Ajout d'un état pour le panier
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const router = useRouter();
  const isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return; // Évite d'ouvrir le menu si l'utilisateur est redirigé
    }
    setIsProfileOpen((prev: any) => !prev);
  };

  return (
    <div className="flex items-center justify-between gap-5 xl:gap-7 relative">
      {/* Icône Profil */}
      <CgProfile className="cursor-pointer text-xl" onClick={handleProfile} />

        {/* Menu déroulant du profil */}
        {isProfileOpen && (
        <div className="absolute z-50 p-4 rounded-md bg-white dark:bg-gray-800 dark:text-gray-100 shadow-lg top-12 left-0 text-sm w-40">
            <Link href="/login" className="block hover:text-blue-600">
                Profile
            </Link>
            <div className="mt-2 cursor-pointer hover:text-red-600">
                Logout
            </div>
        </div>
      )}

        {/* Icône Panier */}
        <div className="relative cursor-pointer">
            <HiOutlineShoppingCart
            className="cursor-pointer text-xl"
            onClick={() => setIsCartOpen((prev: any) => !prev)}
            />
            <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-gray-400 text-white text-sm flex items-center justify-center">

            </div>
        </div>
        {isCartOpen && <CartModal />}

        {/* icons Favorites */}
        <div>
            <MdFavorite 
            className="cursor-pointer text-xl"
            onClick={() => setIsFavoritesOpen((prev: any) => !prev)}
            />
            
        </div>
            {isFavoritesOpen && 
            <FavoritesModal />} 
      
    </div>
  );
}
