"use client";

import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

interface CaseStudy {
  title: string;
  description: string;
  imageUrl: string;
  subtitle: string;
}

const SectionOne: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const subtitles: string[] = [
    "SUSPENSION",
    "TOP_NOTCH",
    "CAR",
    "LOCATION",
    "GUARANTEE",
  ];

  const caseStudies: CaseStudy[] = [
    {
      title: "Four wheel independent suspension",
      description:
        "Embark on a journey of opulence with the 2023 Jeep Wagoneer Series III in Silver Zynith. This sophisticated SUV combines advanced technology, premium materials.",
      imageUrl:
        "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
      subtitle: "NOVA",
    },
    {
      title: "Our investment in top-notch",
      description:
        "Whether you need routine maintenance or the most complicated repairs, our Beavercreek, Eaton, Greenville.",
      imageUrl:
        "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      subtitle: "UI/UX",
    },
    {
      title: "Sell Us Your Car",
      description:
        "When you are looking to shop for a new or used car one of the most important parts about the entire shopping experience is working with the best dealership possible to make trading-in your current car.",
      imageUrl:
        "https://images.pexels.com/photos/17110483/pexels-photo-17110483/free-photo-of-voiture-voiture-de-sport-audi-moteur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      subtitle: "Christmas",
    },
    {
      title: "Pick One Of Our Locations",
      description:
        "Local drivers choose us for the peace of mind knowing that they can rely on us for all-inclusive services. ",
      imageUrl:
        "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg",
      subtitle: "3D",
    },
    {
      title: "Car Guarantee",
      description:
        "The Superior Value Guarantee isn't just a philosophy or ethos we live by; it includes a full suite of tangible benefits as well. The Car Dealer Group is committed to providing our customers with the best value in a 50 mile radius.",
      imageUrl:
        "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg",
      subtitle: "Art",
    },
  ];

  // Change l'index toutes les 5 secondes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 5000); // 5 secondes d'interval

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []); // Le tableau d'independance vide [] signifie que cet effet ne se lance qu'une seule fois au montage

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="absolute left-0 z-10 p-3 cursor-pointer"
        onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length)}
      >
        <FiArrowLeft
          size="30"
          className="text-gray-800 bg-gray-100 rounded-full"
        />
      </div>
      <div className="h-full overflow-hidden">
        <Image
          src={caseStudies[activeIndex].imageUrl}
          className="w-full min-h-full object-cover"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 bg-transparent bg-opacity-50">
          <div className="text-center w-[900px]">
            <h2 className="text-5xl font-bold text-white mb-8">
              {caseStudies[activeIndex].title}
            </h2>
            <p className="text-white text-2xl mb-4">
              {caseStudies[activeIndex].description}
            </p>
            {/* Affichage de tous les sous-titres sous l'image */}
            <div className="flex justify-center w-full lg:w-1/2 md:w-2/3 sm:w-3/4 gap-8 mt-4 absolute bottom-0 mb-5 ">

              {subtitles.map((subtitle, index) => (
                <span
                  key={index}
                  className={`text-white text-lg font-semibold border-b-2 w-full ${
                    activeIndex === index ? "border-blue-500" : "border-white"
                  }`}
                >
                  {subtitle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute right-0 z-10 p-3 cursor-pointer"
        onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)}
      >
        <FiArrowRight
          size="30"
          className="text-gray-800 bg-gray-100 rounded-full"
        />
      </div>
    </div>
  );
};

export default SectionOne;
