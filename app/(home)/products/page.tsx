"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "../../../Components/ui/card";
import Link from "next/link";
import HeaderProducts from "@/Components/Header.products";
import Section2 from "@/Components/carousel.products";

const CarsPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const apiUrl = "/api/cars";
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching cars:", err);
        setError(`Failed to load cars: ${err.message}`);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <HeaderProducts/>
      <Section2/>
      <div className="container mx-auto p-4">
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">Car disponible</h1>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cars.map((car: any) => (
                <li
                  key={car.id}
                  className="border rounded-lg shadow-lg overflow-hidden"
                >
                  <img className="w-full h-84" src={car.image} alt="" />

                  <div className="p-4">
                    <h2 className="text-lg font-semibold">
                      {car.make_id} - {car.model}
                    </h2>
                    <p className="text-gray-500">Color: {car.color}</p>
                    <p className="text-gray-500">Price: ${car.price}</p>
                    <p className="text-gray-700">{car.description}</p>
                    <div className="mt-4 flex justify-between ">
                      <p className="text-sm text-gray-600">
                        {car.city}, {car.state} {car.postal}
                      </p>
                      <Link href="/details">
                        <span className="bg-amber-400 cursor-pointer px-4 py-2 rounded">
                          Details
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default CarsPage;
