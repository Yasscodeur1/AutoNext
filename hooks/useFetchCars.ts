"use client";

import { useState, useEffect } from "react";

export interface Car {
  make_id: string;
  model: string;
  price: number;
  isAvailable: boolean;
  color?: string;
  description: string;
  image: string;
  id: number;
  year: number;
  city: string;
  state: string;
  postal: string;
}

export default function useFetchCars(): { cars: Car[]; loading: boolean; error: string | null } {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/cars");
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const data: Car[] = await response.json(); // Type data correctement
        setCars(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Échec du chargement des voitures : ${err.message}`);
        } else {
          setError("Échec du chargement des voitures : Erreur inconnue");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
}