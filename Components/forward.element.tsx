"use client";

import Badge from '@mui/material/Badge';
import React, { useEffect, useState } from "react";

interface Car {
  image: string | undefined;
  price: number;
  make_id: string;
  id: number;
  model: string;
  description: string;
}

export default function ForwardElement() {
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/cars");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Car[] = await response.json();
        // Trier les voitures par prix croissant
        const sortedData = data.sort((a, b) => a.price - b.price);
        setCars(sortedData);
        //afficher les 5 premier voiture
        setCars(data.slice(0, 5)); // Récupère les cinq premières voitures
      } catch (err: any) {
        console.error("Error fetching cars:", err);
        setError(`Échec du chargement des voitures : ${err.message}`);
      }
    };

    fetchCars();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='bg-gray-100 w-full dark:bg-gray-800 flex flex-col items-center justify-center'>
  <div className="inline-block px-4 py-2 mb-6 m-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
    Cars for Sales
  </div>
  <div className="overflow-hidden flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 w-full m-0 p-0 min-h-64">
    {cars.length > 0 ? (
      <div className="flex  items-center justify-center flex-wrap gap-4"> 
        {cars.map((car) => (
          <div
            key={car.id}
            className="relative m-4 md:m-2 w-full md:w-1/2 lg:w-[20%] overflow-hidden rounded-2xl shadow-md shadow-gray-700 bg-white dark:bg-gray-800" // Ajout de md:w-1/2
          >
            <img
              src={car.image}
              className="w-full h-40 object-cover rounded-t-2xl"
              alt={car.model}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{car.make_id}</h2>
              <p className="text-sm">{car.model}</p>
              <Badge className="mt-2 bg-gray-500 p-1 rounded-2xl px-3">{car.price} €</Badge>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>Chargement des voitures...</p>
    )}
  </div>
</div>
  );
}

