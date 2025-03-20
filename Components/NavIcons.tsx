"use client";

import Link from "next/link"; // Correction ici
import { useRouter } from "next/navigation"; // Correction ici
import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartModal from "./CartModal";
import { MdFavorite } from "react-icons/md";
import FavoritesModal from "./FavoritesModal";
// import { useCart } from "./context/CartContextType";
import { useFavorites } from "./context/FavoritesContext";
import { useCart } from "./context/CartContextType";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Ajout d'un état pour le profile
  const [isCartOpen, setIsCartOpen] = useState(false); // Ajout d'un état pour le panier
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const router = useRouter();
  const { cart } = useCart();
  const { favorites } = useFavorites();

  const isLoggedIn = true;

  const profileRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const favoritesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current && !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
      if (
        cartRef.current && !cartRef.current.contains(event.target as Node)
      ) {
        setIsCartOpen(false);
      }
      if (
        favoritesRef.current && !favoritesRef.current.contains(event.target as Node)
      ) {
        setIsFavoritesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            {cart.length > 0 && (
            <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-gray-400 text-white text-sm flex items-center justify-center">
            {cart.length}
            </div>
            )}
        </div>
        {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)}/>}

        {/* icons Favorites */}
        <div ref={favoritesRef} className="relative cursor-pointer">
        <MdFavorite
          className="cursor-pointer text-xl"
          onClick={() => setIsFavoritesOpen((prev) => !prev)}
        />
        {favorites.length > 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            {favorites.length}
          </div>
        )}
        {isFavoritesOpen && <FavoritesModal onClose={() => setIsFavoritesOpen(false)} />}
      </div>
      
    </div>
  );
}
