"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const HeaderProducts = () => {
  const [cars, setCars] = useState<typageCar[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

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
        console.error("Error fetching cars:", error);
        setError(`Échec du chargement des voitures : ${err.message}`);
      }
    };

    fetchCars();
  }, []);

  // Fonction pour obtenir 5 modèles aléatoires
  const getRandomCars = (cars: typageCar[], num: number) => {
    const shuffled = [...cars].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomCars = getRandomCars(cars, 5);

  // Fonctions pour gérer le carrousel
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % randomCars.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? randomCars.length - 1 : prevIndex - 1
    );
  };

  // Change l'index toutes les 5 secondes
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // 5 secondes d'interval

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [cars.length]); // Le tableau d'independance vide [] signifie que cet effet ne se lance qu'une seule fois au montage

  return (
    <div className="flex justify-center items-center lg:min-w-lvh lg:ml-60 gap-10 max-h-screen lg:my-40">
      <div className="absolute lg:mt-60 top-1/4 left-1/10 flex flex-col  h-full bg-background mt-10 ">
        <div className="hidden sm:hidden md:block max-w-4xl mx-auto px-4 py-16 text-start lg:w-2xl m-10 bg-[rgba(255,255,255,0.1)] shadow-lg shadow-gray-600 rounded-2xl p-10">
          {/* <div className="inline-block px-4 py-2 mb-6 rounded-full bg-pink-100 text-pink-800 text-sm font-medium">
                    Car Sales
                </div> */}
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
            Wide Choice of Vehicles
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our company offers a wide range of vehicles for both private and
            professional customers, because dealers make everyone happy.
          </p>
          <Button
            size={"lg"}
            className="bg-foreground text-black dark:text-white hover:bg-foreground/80 p-6 rounded-full shadow shadow-gray-600 border-shadow border-amber-50"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Carrousel */}
      <div className="relative lg:ml-80 overflow-hidden flex items-center justify-end rounded-2xl bg-gray-100 dark:bg-gray-800 lg:w-180 min-h-64 lg:mb-60">
        {randomCars.length > 0 ? (
          <div className="relative w-lvh max-w-4xl p-5 overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800">
            {/* <div
              className="absolute top-1/2 left-0 z-10 bg-blue-950 p-3 cursor-pointer"
              onClick={prevSlide}
            >
              <FiArrowLeft size="24" />
            </div> */}

            <img
              src={randomCars[activeIndex].image}
              className="w-full h-96 object-cover rounded-2xl"
              alt={randomCars[activeIndex].model}
            />
            <div className="flex justify-between p-5">
              <h2 className="text-xl font-bold p-1.5">
                {randomCars[activeIndex].model}{" "}
                {randomCars[activeIndex].make_id}
              </h2>
              <p className="p-1.5 ">{randomCars[activeIndex].price} €</p>
            </div>
            {/* <div
              className="absolute top-1/2 right-0 z-10 bg-blue-950 p-3 cursor-pointer"
              onClick={nextSlide}
            >
              <FiArrowRight size="24" />
            </div> */}
          </div>
        ) : (
          <p>Chargement des voitures...</p>
        )}
      </div>
    </div>
  );
};

export default HeaderProducts;
