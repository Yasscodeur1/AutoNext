"use client";

import Image from "next/image";
import React from "react";

const sectionTree = () => {
  return (
    <div className="relative">
        <div style={{ position: "relative", width: "100%", height: "580px" }}>
            <Image
            src={"/pexels-pixabay-261985.jpg"}
            alt={""}
            layout="fill"
            objectFit="cover"
            />
            
            <div 
            className="absolute inset-0 bg-blue-500 w-full" 
            style={{ opacity: 0.3 }} 
            ></div>
        </div>
        <div className="absolute w-lvh top-2/5 left-1/4 z-10"> 
        <p className="text-white text-center">
          Ontdek nu de uitzonderlijke <span className="text-3xl">voorwaarden van onze </span>deelnemende merken.
          Vraag een offerte <span className="text-3xl">op maat aan of boek een proefrit </span>voor je favoriete
          model <span className="text-5xl">en profiteer</span> van onverslaanbare aanbiedingen.
        </p>
      </div>
    </div>
  );
};

export default sectionTree;
