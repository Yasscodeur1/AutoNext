"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdSearch } from "react-icons/io";

interface SearchBarProps {
  onSearch: (query: string) => void;
}
// export default function SearchBar({onSearch}: SearchBarProps) {
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
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
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="cursor-pointer text-gray-500 hover:text-gray-700"
      >
        <IoMdSearch size={24} />
      </button>
    </form>
  );
}
