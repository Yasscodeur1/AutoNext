"use client";
console.log("SearchBar rendu !");

import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({onSearch}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit appelé");
    e.preventDefault();
    console.log("Recherche soumise :", query); 
    onSearch(query);
  };

  return (
    <form
      className="flex items-center gap-4 dark:bg-gray-800 p-1 rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="query"
        placeholder="Rechercher une marque, un modèle..."
        className="bg-transparent outline-none dark:text-gray-100 px-2"
        value={query}
        // onChange={(e) => setQuery(e.target.value)}
        onChange={(e) => {
          console.log("Valeur de l'input :", e.target.value);
          setQuery(e.target.value);
        }}
      />
      <button type="submit"  className="cursor-pointer text-gray-500 hover:text-gray-700"
      onClick={() => console.log("Bouton cliqué")}
      >

        <IoMdSearch size={24} />
      </button>
    </form>
  );
}

