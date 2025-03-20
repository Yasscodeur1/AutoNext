import React from "react";
import { useFavorites } from "../Components/context/FavoritesContext";
import useFetchCars from "../hooks/useFetchCars";
import { FiX } from "react-icons/fi";

interface FavoritesModalProps {
  onClose: () => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({ onClose }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { cars } = useFetchCars();

  const favoriteCars = cars.filter((car: { id: number; }) => favorites.includes(car.id));

  return (
      <div className="fixed z-50 p-4 rounded-md shadow-lg bg-gray-200 dark:bg-gray-800 top-12 right-0 flex flex-col gap-6 w-72">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Vos favoris</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
            <FiX size={24} />
          </button>
        </div>

        {favoriteCars.length > 0 ? (
          <ul className="space-y-4">
            {favoriteCars.map((car) => (
              <li key={car.id} className="flex items-center justify-between">
                <span>{car.make_id} - {car.model}</span>
                <button
                  onClick={() => toggleFavorite(car.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Retirer
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Aucun favori pour le moment.</p>
        )}
      </div>
  );
};

export default FavoritesModal;

