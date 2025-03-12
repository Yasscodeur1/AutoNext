import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
    <form onSubmit={handleSearch} className="m-8 flex items-center gap-5">
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
          borderRadius: "10px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: focused ? "#2a5766" : "gray" },
            "&:hover fieldset": { borderColor: "#2563eb" },
            "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
          },
          input: {
            color: darkMode ? "white" : "black",
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#3b82f6",
          "&:hover": { backgroundColor: "#2563eb" },
          borderRadius: "8px",
          padding: "10px 20px",
        }}
      >
        Rechercher
      </Button>
    </form>
  );
};

export default Search;
