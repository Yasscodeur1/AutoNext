"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import useFetchCars from "@/hooks/useFetchCars";

const HeaderProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { cars, loading } = useFetchCars();

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

  const getRandomCars = (cars: typageCar[], num: number) => {
    const shuffled = [...cars].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomCars = getRandomCars(cars, 5);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % randomCars.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [cars.length]);

  if (loading) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center lg:min-w-lvh lg:ml-60 gap-10 max-h-screen lg:my-20">
      <div className="absolute z-50 lg:mt-60 top-17 left-1/12 flex flex-col  h-full bg-background">
        <div className="hidden sm:hidden md:hidden lg:block xl:block max-w-4xl mx-auto px-4 py-16 text-start lg:w-2xl m-10 bg-[rgba(255,255,255,0.1)] shadow-md shadow-gray-600 rounded-2xl p-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
            Wide Choice of Vehicles
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our company offers a wide range of vehicles for both private and
            professional customers, because dealers make everyone happy.
          </p>
          <Link href="/contact">
            <Button
              size={"lg"}
              className="bg-foreground text-black dark:text-white hover:bg-foreground/80 p-6 rounded-full shadow shadow-gray-600 border-shadow border-amber-50"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative lg:ml-80 overflow-hidden flex items-center justify-end rounded-2xl bg-gray-100 dark:bg-gray-800 lg:w-180 min-h-64 lg:mb-60">
        {randomCars.length > 0 ? (
          <div className=" w-lvh max-w-4xl p-5 overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800">
            <img
              src={randomCars[activeIndex].image}
              className="w-full h-96 object-cover rounded-2xl"
              alt={randomCars[activeIndex].model}
            />
          </div>
        ) : (
          <p>Chargement des voitures...</p>
        )}
      </div>
    </div>
  );
};

export default HeaderProducts;