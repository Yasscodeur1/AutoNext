"use client";

import React from "react";
import Image from "next/image";
import {useCart} from "../Components/context/CartContextType"; // Import du hook panier

export default function CartModal() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="absolute p-4 rounded-md shadow-lg bg-white dark:bg-gray-800 top-12 right-0 flex flex-col gap-6 z-50 w-72">
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Votre panier est vide</div>
      ) : (
        cart.map((car) => (
          <div key={car.make_id} className="flex gap-4 border-b pb-2">
            <Image
              src={car.image}
              alt={car.model}
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{car.model}</h3>
              <div className="text-blue-600 font-bold">{car.price} €</div>
              <button
                className="text-red-500 text-xs mt-2"
                onClick={() => removeFromCart(car.make_id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
