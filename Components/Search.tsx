import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ThemedButton from "./ui/ThemedButton";

interface SearchProps {
  onSearch: (query: string) => void;
  darkMode: boolean;
}

const Search: React.FC<SearchProps> = ({ onSearch, darkMode }) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="sm:m-0 md:m-0 lg:m-8 xl:m-8 sx:flex-wrap md:flex items-center gap-5">
      <TextField
        type="text"
        label="Rechercher une voiture..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        
        sx={{
          width: 250,
          backgroundColor: darkMode ? "#374151" : "#fff",
          border:"none",
          "& .MuiOutlinedInput-root": {
            // "& fieldset": { borderColor: focused ? "#2a5766" : "gray" },
            "&:hover fieldset": { borderColor: "#2563eb" },
            "&.Mui-focused fieldset": { borderColor: "#364254" },
          },
          input: {
            color: darkMode ? "white" : "black",
          },
        }}
      />
      <ThemedButton />
    </form>
  );
};

export default Search;


