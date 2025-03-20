"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "./context/CartContextType";
import { FiX, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

interface CartModalProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps): React.JSX.Element {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="absolute p-4 rounded-2xl shadow-2xl bg-gray-200 dark:bg-gray-800 top-16 right-0 flex flex-col gap-4 z-50 w-80">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-xl font-bold">Votre panier</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500">
          <FiX size={24} />
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="text-gray-500 text-center py-8">Votre panier est vide</div>
      ) : (
        <div className="flex flex-col gap-4 max-h-96 overflow-y-auto">
          {cart.map((car) => (
            <div key={car.make_id} className="flex gap-4 items-center border-b pb-2">
              <Image
                src={car.image}
                alt={car.model}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{car.model}</h3>
                <p className="text-blue-600 font-bold text-sm">{car.price} €</p>
                <button
                  className="text-red-500 text-xs mt-1 hover:underline"
                  onClick={() => removeFromCart(car.make_id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <Link
          href="/panier"
          className="mt-4 bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
          onClick={onClose}
        >
          <FiShoppingCart size={20} /> Voir mon panier
        </Link>
      )}
    </div>
  );
}
