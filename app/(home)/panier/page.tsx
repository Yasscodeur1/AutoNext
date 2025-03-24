"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../../../components/context/CartContextType";
import { FiX, FiTrash2 } from "react-icons/fi";
import { useAuth } from "../../../components/context/AuthContext"; 
import { useRouter } from "next/navigation";

interface CartPageProps {
  onClose: () => void;
  clearCart: () => void;
}

export default function CartPage({ onClose }: CartPageProps): React.JSX.Element {
  const { cart, removeFromCart, clearCart } = useCart();
  const { isLoggedIn } = useAuth(); 
  const totalPrice = cart.reduce((total, car) => total + car.price, 0);
  const router = useRouter();
  const [paymentMessage, setPaymentMessage] = useState<string | null>(null);
  const [isCartClosed, setIsCartClosed] = useState(false);

  // Handle closing and redirecting to /products page
  const handleCloseAndRedirect = () => {
    if (onClose) {
      onClose(); // Appelez onClose si elle est définie
    }
   setIsCartClosed(true); // exemple d'état local
    router.push("/products"); // Redirigez vers /products
  };

  // Fonction pour gérer le paiement
  const handlePayment = () => {
    if (isLoggedIn) {
      clearCart();  // Vide le panier
      setPaymentMessage("Paiement accepté !");

      // Affiche le message pendant 3 secondes puis le cache
      setTimeout(() => {
        setPaymentMessage(null);  // Efface le message après 3 secondes
        router.push("/products"); // Redirige vers la page des produits après paiement
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md w-full relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Votre panier</h2>
          <button
            onClick={handleCloseAndRedirect}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            aria-label="Fermer le panier"
          >
            <FiX size={28} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="text-gray-500 text-center py-10">
            {paymentMessage && (
              <div className="mt-4 text-green-600 font-semibold text-center">
                {paymentMessage}
              </div>
            )}
            Votre panier est vide
            </div>
        ) :  (
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {cart.map((car) => (
              <div key={car.id} className="flex gap-4 items-center border-b pb-3">
                <Image
                  src={car.image}
                  alt={car.model}
                  width={80}
                  height={60}
                  className="object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    {car.make_id} - {car.model}
                  </h3>
                  <div className="text-blue-600 font-bold">{car.price} €</div>
                </div>
                <button
                  onClick={() => removeFromCart(car.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Supprimer cet article"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg">Total :</span>
              <span className="text-xl font-bold text-blue-600">
                {totalPrice.toFixed(2)} €
              </span>
            </div>
            <button
              onClick={handlePayment}
              disabled={!isLoggedIn}
              className={`w-full py-3 rounded-xl text-lg font-semibold transition ${
                isLoggedIn
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
            >
              {isLoggedIn ? "Valider la commande" : "Connectez-vous pour payer"}
            </button>
            {paymentMessage && (
              <div className="mt-4 text-green-600 font-semibold text-center">
              {paymentMessage}
            </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
