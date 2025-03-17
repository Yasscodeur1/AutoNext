"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Car {
  id: number;
  make_id: string;
  model: string;
  year: number;
  price: number;
  isAvailable: boolean;
  color?: string;
  city: string;
  state: string;
  postal: string;
  description: string;
  image: string;
}

interface CartContextType {
  cart: Car[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Car[]>([]);

  const addToCart = (car: Car) => {
    setCart((prevCart) => [...prevCart, car]);
  };

  const removeFromCart = (carId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.make_id !== carId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
