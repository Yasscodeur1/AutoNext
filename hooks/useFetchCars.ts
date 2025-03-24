"use client";

import { useState, useEffect } from "react";
import { ReactNode } from "react";

export interface Car {
  longitude: ReactNode;
  latitude: ReactNode;
  seller: ReactNode;
  vin: ReactNode;
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
  "seller-name": string;
}

export default function useFetchCars(): { cars: Car[]; loading: boolean; error: string | null } {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Simulation d'un délai d'attente (ici 1 seconde) pour imiter un temps de chargement
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Envoi de la requête vers ton endpoint interne `/api/cars`
        const response = await fetch("/api/cars");

        // Vérifie si la réponse est correcte, sinon lance une erreur
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        // Si tout va bien, transforme la réponse en JSON et typage explicite en tableau de voitures
        const data: Car[] = await response.json(); 
        // Met à jour l'état `cars` avec les données récupérées
        setCars(data);
      } catch (err) {
        // Gestion des erreurs : différencie les erreurs connues (instances de Error) des autres
        if (err instanceof Error) {
          setError(`Échec du chargement des voitures : ${err.message}`);
        } else {
          setError("Échec du chargement des voitures : Erreur inconnue");
        }
      } finally {
        // Qu'il y ait une erreur ou non, indique que le chargement est terminé
        setLoading(false);
      }
    };

    // Exécution de la fonction fetchCars dès que le composant est monté (une seule fois)
    fetchCars();
  }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'au montage du composant

  return { cars, loading, error };
}