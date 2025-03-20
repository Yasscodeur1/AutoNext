"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import useFetchCars from "@/hooks/useFetchCars";
import { GiHamburgerMenu } from "react-icons/gi";

interface SideBarProps {
  onCarSelect: (carId: string) => void;
}

interface CarDetails {
  id: number;
  make_id: string;
  model: string;
  year: number;
  vin: string;
  color?: string;
  price: number;
  city: string;
  state: string;
  postal: number;
  longitude: number;
  latitude: number;
  description: string;
  seller: string;
  "seller-name": string;
  image: string;
  image_thumb: string;
}

export default function SideBar({ onCarSelect }: SideBarProps) {
  const { cars, loading, error } = useFetchCars();

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!cars || cars.length === 0) {
    return <p>Aucune voiture trouvée.</p>;
  }

  return (
    <div className="overflow-y-auto overflow-scroll">
  <Disclosure as="nav">
    <Disclosure.Button className="absolute dark:bg-gray-800 top-10 right-4 z-50 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-900 md:block lg:hidden">
      <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
    </Disclosure.Button>
    <div className="p-6 w-1/2 h-screen bg-white dark:bg-gray-800 dark:text-gray-100 z-20 fixed top-0 left-[-100%] lg:w-80 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 overflow-y-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-20 text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
          Virtual Dashboard
        </h1>
        <div>
          {cars.map((car) => (
            <div
              key={car.id}
              className="shadow-md rounded-xl cursor-pointer"
              onClick={() => onCarSelect(car.id.toString())}
            >
              <h1 className="text-lg mb-2 p-2">
                {car.make_id} - {car.model}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Disclosure>
</div>
  );
}
