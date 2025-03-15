import React from "react";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <div className="text-center m-20">
      <div className="">
        <h1 className="text-2xl font-bold">WELCOME TO CARDEALER.BE</h1>
        <p>
          Wie zijn we CarDealer.be is een 100% Belgisch en nationaal platform dat
          zich heeft gepositioneerd als voorkeurspartner voor handelaars en
          professionelen in tweedehandsauto's, maar fungeert tevens als
          informatie- en ondersteuningsmedium voor particulieren en
          professionelen die op zoek zijn naar een tweedehandsauto. CarDealer.be
          geeft een overzicht van tienduizenden advertenties voor
          tweedehandsauto's, verkocht door zowel professionals als particulieren
          en biedt nieuws dat aan uw verschillende behoeften voldoet; een
          maximum aan informatie die u zal toelaten om de beste keuze te maken
          in uw overweging betreffende de aankoop van uw nieuwe tweedehandsauto.
          Wilt u meer weten over onze geschiedenis, onze waarden en onze missie?
          Lees hier meer!
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-10 mt-20 md:flex-nowrap">
  <div className="w-150 ">
    <h1 className="text-2xl font-bold">CAR DEALER SHOWROOM</h1>
    <p>
      Vind de beste autodealers bij jou in de buurt op CarDealer.be. Ons
      platform vereenvoudigt het zoeken door je eenvoudig toegang te geven
      tot een groot aantal betrouwbare garages, dealers en verkopers.
      Gebruik onze intuïtieve zoekbalk om je locatie op te geven en ontdek
      een uitgebreide lijst met verkopers die aan je criteria voldoen.
      Verken gedetailleerde profielen, lees beoordelingen van andere kopers
      en neem weloverwogen beslissingen over je volgende autoaankoop. Met
      CarDealer.be wordt het kopen van een auto een transparante en
      probleemloze ervaring.
    </p>
  </div>
  <Image
    src={"/best-bmw-future-concept-cars.jpg"}
    width={600}
    height={300}
    alt={"BMW"}
  />
</div>

    </div>
  );
};

export default SectionTwo;
