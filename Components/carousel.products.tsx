"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CarBrand = {
  id: number;
  name: string;
  image: string;
};

const carBrands: CarBrand[] = [
  { id: 1, name: "Alfa-Romeo", image: "https://www.carlogos.org/logo/Alfa-Romeo-logo-2015-1920x1080.png" },
  { id: 2, name: "Mercedes-Benz", image: "https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png" },
  { id: 3, name: "Alpina", image: "https://www.carlogos.org/logo/Alpina-logo-2560x1440.png" },
  { id: 4, name: "Mini", image: "https://www.carlogos.org/logo/Mini-logo-2001-1920x1080.png" },
  { id: 5, name: "MG", image: "https://www.carlogos.org/logo/MG-logo-red-2010-1920x1080.png" },
  { id: 6, name: "McLaren", image: "https://www.carlogos.org/logo/McLaren-logo-2002-2560x1440.png" },
  { id: 7, name: "Land-Rover", image: "https://www.carlogos.org/logo/Land-Rover-logo-2011-1920x1080.png" },
];

// Duplique les logos pour un défilement infini
const logos = [...carBrands, ...carBrands];

const Carousel = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-400 py-6">
      <motion.div
        className="flex w-max flex-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {logos.map((brand, index) => (
          <div key={index} className="w-40 flex-shrink-0 px-4">
            <img
              src={brand.image}
              alt={brand.name}
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
