"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "../../../Components/ui/card";
import Link from "next/link";
import HeaderProducts from "@/Components/Header.products";
import Section2 from "@/Components/carousel.products";
import Search from "@/Components/Search"; // Vérifie que c'est bien "Search" et pas "search"


const CarsPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [make_id, setMake_id] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [cars, setCars] = useState<typageCar[]>([]);

  interface typageCar {
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

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/cars");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
      } catch (err: any) {
        console.error("Error fetching cars:", err);
        setError(`Échec du chargement des voitures : ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Gestion de la recherche
  const handleSearch = (query: string) => {
    setSearchTerm(query.toLowerCase());
  };

  // Gestion de la sélection de la marque
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMake_id(e.target.value);
  };

  // Filtrage des voitures selon la recherche et la marque
  const filteredCars = cars.filter(
    (car) =>
      (make_id === "All" || car.make_id === make_id) &&
      (car.make_id.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm))
  );

  return (
    <main>
      <HeaderProducts />
      <Section2 />

      {/* Barre de recherche et filtre de marque */}
      <div className="flex flex-wrap  p-4">
        <Search onSearch={handleSearch} darkMode={darkMode} />

        <select
          value={make_id}
          onChange={handleSelect}
          className="p-2 border rounded"
          style={{
            backgroundColor: darkMode ? "#374151" : "white",
            color: darkMode ? "white" : "black",
          }}
        >
          <option value="All">Toutes les marques</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Dodge">Dodge</option>
        </select>
      </div>

      {/* Affichage des voitures */}
      <div className="container mx-auto p-4">
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">Voitures disponibles</h1>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Chargement en cours...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : filteredCars.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredCars.map((car: typageCar) => (
                  <li
                    key={car.id}
                    className="border rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      className="w-full h-84"
                      src={car.image}
                      alt={car.model}
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">
                        {car.make_id} - {car.model}
                      </h2>
                      <p className="text-gray-500">Couleur : {car.color}</p>
                      <p className="text-gray-500">Prix : ${car.price}</p>
                      {/* <p className="text-gray-700">{car.description}</p> */}
                      <div className="mt-4 flex justify-between">
                        <p className="text-sm text-gray-600">
                          {car.city}, {car.state} {car.postal}
                        </p>
                        <Link href={`/details/${car.id}`}>
                          <span className="bg-blue-400 cursor-pointer px-4 py-2 rounded">
                            Détails
                          </span>
                        </Link>
                      </div>
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
    </main>
  );
};

export default CarsPage;
