"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import useFetchCars from "@/hooks/useFetchCars";
import Link from "next/link";

interface Car {
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

interface Slide {
  make_id: string;
  id: number;
  image: string;
  title: string;
  linkUrl: string;
}

interface CarouselProps {
  fallbackCars: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ fallbackCars }) => {
  const [current, setCurrent] = useState(0);
  const [autoUpdate, setAutoUpdate] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const { cars, loading, error } = useFetchCars();

  const getRandomSlides = (cars: Car[], num: number): Slide[] => {
    return [...cars]
      .sort(() => 0.5 - Math.random())
      .slice(0, num)
      .map((car) => ({
        image: car.image,
        title: car.make_id,
        linkUrl: "#", // à remplacer
      }));
  };

  const currentCars = useMemo(() => {
    if (cars && cars.length > 0) return getRandomSlides(cars, 5);
    return fallbackCars;
  }, [cars, fallbackCars]);

  const handleNavigation = (direction: "left" | "right") => {
    if (!currentCars || currentCars.length === 0) return;
    setCurrent((prev) =>
      direction === "right"
        ? (prev + 1) % currentCars.length
        : (prev - 1 + currentCars.length) % currentCars.length
    );
  };

  useEffect(() => {
    if (!currentCars || currentCars.length === 0) return;
    const timer = setInterval(() => {
      if (autoUpdate) handleNavigation("right");
    }, 3000);
    return () => clearInterval(timer);
  }, [autoUpdate, currentCars, current]);

  const handleTouchStart = (e: React.TouchEvent) =>
    (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 20) handleNavigation(diff > 0 ? "right" : "left");
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft") handleNavigation("left");
      if (e.code === "ArrowRight") handleNavigation("right");
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentCars]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <style jsx>{`
          .container {
            --uib-size: 47px;
            --uib-color: black;
            --uib-speed: 1s;
            --uib-dot-size: calc(var(--uib-size) * 0.18);
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            height: calc(var(--uib-size) * 0.5);
            width: var(--uib-size);
          }
          .dot {
            flex-shrink: 0;
            width: calc(var(--uib-size) * 0.17);
            height: calc(var(--uib-size) * 0.17);
            border-radius: 50%;
            background-color: var(--uib-color);
            transition: background-color 0.3s ease;
          }
          .dot:nth-child(1) {
            animation: jump var(--uib-speed) ease-in-out
              calc(var(--uib-speed) * -0.45) infinite;
          }
          .dot:nth-child(2) {
            animation: jump var(--uib-speed) ease-in-out
              calc(var(--uib-speed) * -0.3) infinite;
          }
          .dot:nth-child(3) {
            animation: jump var(--uib-speed) ease-in-out
              calc(var(--uib-speed) * -0.15) infinite;
          }
          .dot:nth-child(4) {
            animation: jump var(--uib-speed) ease-in-out infinite;
          }
          @keyframes jump {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-200%);
            }
          }
        `}</style>
      </div>
    );
  if (error) return <p>Erreur : {error}</p>;
  if (!currentCars || currentCars.length === 0)
    return <p>Aucune voiture disponible.</p>;

  return (
    <div
      className="relative w-full md:h-[30rem] lg:h-[40rem] md:mt-10 lg:mt-3 overflow-hidden mb-32"
      onMouseEnter={() => setAutoUpdate(false)}
      onMouseLeave={() => setAutoUpdate(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ul className="w-full h-full">
        {currentCars.map((slide, index) => (
          <li
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-[visibility] duration-1000 ${
              index === current ? "visible delay-0" : "invisible delay-1000"
            }`}
          >
            <div
              className="absolute top-0 left-0 w-[70%] h-full bg-cover bg-center transition-[clip] duration-500 delay-500"
              style={{
                backgroundImage: `url(${slide.image})`,
                clip:
                  index === current
                    ? "rect(0, 80rem, 50rem, 0)"
                    : index ===
                      (current - 1 + currentCars.length) % currentCars.length
                    ? "rect(0, 0, 50rem, 0)"
                    : "rect(0, 80rem, 50rem, 80rem)",
              }}
            />
            <div className="absolute top-0 right-0 w-full h-full p-8 text-right text-[9rem]">
              <h2
                className={`truncate transition-all duration-500 ${
                  index === current
                    ? "opacity-100 translate-y-0 delay-1000"
                    : "opacity-0 -translate-y-1/3"
                }`}
              >
                {slide.title}
              </h2>
              <Link
                href={`/products/${slide.make_id}`}
                className={`inline-block text-2xl lowercase p-6 transition-all duration-500 ${
                  index === current
                    ? "opacity-100 translate-y-0 delay-1100"
                    : "opacity-0 -translate-y-full"
                }`}
              >
                Voir la galerie
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {currentCars.length > 1 && (
        <nav className="absolute bottom-0 mr-10 right-0 bg-white dark:bg-gray-700 z-20 flex items-center p-2">
          <button
            onClick={() => handleNavigation("left")}
            className="relative h-20 w-20 bg-transparent border-0 cursor-pointer"
            aria-label="Précédent"
          >
            <span className="absolute top-1/2 left-0 transform -translate-y-1/2 border-8 border-transparent border-r-black w-0 h-0"></span>
            <span className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black h-[2px] w-10 transition-all hover:w-14"></span>
            {/* Flèche gauche */}
          </button>
          <div className="text-4xl italic font-serif flex items-center">
            <span>{current + 1}</span>
            <span className="mx-4">/</span>
            <span>{currentCars.length}</span>
          </div>
          <button
            onClick={() => handleNavigation("right")}
            className="relative h-20 w-20 bg-transparent border-0 cursor-pointer"
            aria-label="Suivant"
          >
            <span className="absolute top-1/2 right-0 transform -translate-y-1/2 border-8 border-transparent border-l-black w-0 h-0"></span>
            <span className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black h-[2px] w-10 transition-all hover:w-14"></span>
            {/* Flèche droite */}
          </button>
        </nav>
      )}
    </div>
  );
};

export default Carousel;
