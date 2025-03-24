"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "../../../components/ui/card";
import Link from "next/link";
import Search from "../../../components/Search";
import useFetchCars, { Car } from "../../../hooks/useFetchCars";
import { useCart } from "../../../components/context/CartContextType";
import { useFavorites } from "../../../components/context/FavoritesContext";
import { FiHeart } from "react-icons/fi";
import HeaderProducts from "../../../components/Header.products";

const CarsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [makeId, setMakeId] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const { favorites, toggleFavorite } = useFavorites();
  const { cars, loading, error } = useFetchCars();
  const { addToCart } = useCart();
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchTerm(query.toLowerCase());
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMakeId(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleCarSelect = (carId: string) => {
    setSelectedCarId(carId);
  };

  const filteredCars = cars.filter(
    (car) =>
      (makeId === "All" || car.make_id === makeId) &&
      (car.make_id.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm)) &&
      car.price >= minPrice &&
      car.price <= maxPrice
  );

  return (
    <>
      <HeaderProducts />
      <div className="flex items-center justify-around flex-wrap p-4">
        <Search onSearch={handleSearch} darkMode={false} />
        <select
          value={makeId}
          onChange={handleSelect}
          className="p-2 h-15 m-8 rounded dark:bg-gray-700"
        >
          <option value="All">Toutes les marques</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Dodge">Dodge</option>
        </select>
        <div className="flex flex-col items-center ">
          <label className="mr-2">Prix Min :</label>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="p-2 m-2 rounded-2xl dark:bg-gray-700"
          />
          <label className="mr-2">Prix Max :</label>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="p-2 m-2 rounded-2xl dark:bg-gray-700"
          />
        </div>
      </div>
      <div className="container mx-auto p-4 2xl:mx-40">
        <Card className="border-0 shadow-0">
          <CardHeader>
            <h1 className="text-2xl font-bold">Voitures disponibles</h1>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Chargement en cours...</p>
            ) : error ? (
              <p className="text-red-500">Erreur : {error}</p>
            ) : filteredCars.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:w-520 gap-7">
                {filteredCars.map((car: Car) => (
                  <li
                    key={car.id}
                    className="border-0 rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800"
                  >
                    <img
                      className="w-full h-84"
                      src={car.image}
                      alt={car.model}
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold m-1.5">
                        {car.make_id} - {car.model}
                      </h2>
                      <p className="text-gray-500 m-1.5">
                        Couleur : {car.color}
                      </p>
                      <p className="text-gray-500 m-1.5">Prix : ${car.price}</p>
                      <div className="mt-4 flex justify-between m-1.5">
                        <p className="text-sm text-gray-600">
                          {car.city}, {car.state} {car.postal}
                        </p>
                        <Link
                          href={`/products/${car.id}`}
                          aria-label={`Voir les détails de ${car.make_id} ${car.model}`}
                        >
                          <span className="underline cursor-pointer px-4 py-2 rounded">
                            Détails
                          </span>
                        </Link>

                        <button
                          onClick={() => toggleFavorite(car.id)}
                          aria-label={
                            favorites.includes(car.id)
                              ? "Retirer des favoris"
                              : "Ajouter aux favoris"
                          }
                        >
                          <FiHeart
                            className={`cursor-pointer ${
                              favorites.includes(car.id)
                                ? "text-red-500"
                                : "text-gray-500"
                            }`}
                          />
                        </button>
                      </div>
                      <button
                        className="bg-blue-400 cursor-pointer px-4 py-2 rounded flex justify-center m-1.5"
                        onClick={() => addToCart(car)}
                        aria-label={`Ajouter ${car.make_id} ${car.model} au panier`}
                      >
                        Ajouter au panier
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">
                Aucune voiture trouvée.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CarsPage;
