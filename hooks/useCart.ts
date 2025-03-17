"use client";

import { useState } from "react";
import { Car } from "./useFetchCars"; 

export default function useCart() {
  const [cart, setCart] = useState<Car[]>([]);

  // Ajouter une voiture au panier
  const addToCart = (car: Car) => {
    setCart((prevCart) => [...prevCart, car]);
  };

  // Supprimer une voiture du panier
  const removeFromCart = (carId: string) => {
    setCart((prevCart) => prevCart.filter((car) => car.make_id !== carId));
  };

  return { cart, addToCart, removeFromCart };
}
