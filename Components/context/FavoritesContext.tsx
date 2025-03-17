import React, {useState, createContext, useContext, ReactNode } from "react";

interface FavoritesContextType {
    favorites: number[];
    toggleFavorite: (carId: number) => void;
  }
  
  const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
  
  export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
      throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
  };
  
  interface FavoritesProviderProps {
    children: ReactNode;
  }
  
  export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
    const [favorites, setFavorites] = useState<number[]>([]);
  
    const toggleFavorite = (carId: number) => {
      setFavorites((prevFavorites) =>
        prevFavorites.includes(carId)
          ? prevFavorites.filter((id) => id !== carId)
          : [...prevFavorites, carId]
      );
    };
  
    return (
      <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
        {children}
      </FavoritesContext.Provider>
    );
  };