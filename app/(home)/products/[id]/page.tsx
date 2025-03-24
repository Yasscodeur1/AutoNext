"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import useFetchCars from "@/hooks/useFetchCars";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CarDetailsPage() {
  const params = useParams();
  const { cars, loading, error } = useFetchCars();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!cars || cars.length === 0) return <p>Aucune voiture trouvée.</p>;

  const carId = Array.isArray(params.id) ? params.id[0] : params.id;


  const selectedCar = cars.find((car) => car.id.toString() === carId);

  return (
    <div className="container min-w-full mb-10 grid md:grid-cols-2 lg:grid-cols-1 mt-10 shadow-md shadow-gray-100">
      <Card className="py-0 border-0">
        {selectedCar ? (
          <div key={selectedCar.id} className="shadow-md rounded-xl">
            <CardHeader className="p-6 flex flex-row justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-4">
                  {selectedCar.make_id} {selectedCar.model} ({selectedCar.year})
                </h1>
                <p className="text-lg text-gray-600">${selectedCar.price}</p>
              </div>
              <Link href="/contact">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Contacter le vendeur
                </button>
              </Link>
            </CardHeader>
            <CardContent className="p-6">
              <img
                src={selectedCar.image}
                alt={selectedCar.model}
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Caractéristiques</h2>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Couleur:</strong> {selectedCar.color || "N/A"}
                    </li>
                    <li>
                      <strong>VIN:</strong> {selectedCar.vin}
                    </li>
                    <li>
                      <strong>Localisation:</strong> {selectedCar.city},{" "}
                      {selectedCar.state} {selectedCar.postal}
                    </li>
                    <li>
                      <strong>GPS:</strong> {selectedCar.longitude},{" "}
                      {selectedCar.latitude}
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <p className="text-gray-700">{selectedCar.description}</p>
                  <h2 className="text-xl font-semibold mt-4">Vendeur</h2>
                  <p className="text-gray-700">
                    {selectedCar["seller-name"]} ({selectedCar.seller})
                  </p>
                </div>
              </div>
            </CardContent>
          </div>
        ) : (
          <p>Voiture non trouvée.</p>
        )}
      </Card>
    </div>
  );
}
