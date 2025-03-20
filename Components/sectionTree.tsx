"use client";

import Image from "next/image";
import React from "react";

const SectionTree = () => {
  return (
    <div className="relative -ml-10 -mr-10">
      <div style={{ position: "relative", width: "100%", height: "580px" }}>
        <Image
          src="/pexels-pixabay-261985.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <div
          className="absolute inset-0 bg-blue-500 w-full"
          style={{ opacity: 0.3 }}
        ></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
        <p className="text-white text-center text-lg md:text-xl lg:text-2xl">
          Ontdek nu de uitzonderlijke{" "}
          <span className="text-3xl">voorwaarden van onze </span>deelnemende
          merken. Vraag een offerte{" "}
          <span className="text-3xl">op maat aan of boek een proefrit </span>
          voor je favoriete model <span className="text-5xl">en profiteer</span>{" "}
          van onverslaanbare aanbiedingen.
        </p>
      </div>
    </div>
  );
};

export default SectionTree;
