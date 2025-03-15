"use client"

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/Components/ui/card';

interface CarDetails {
  id: number;
  make_id: string;
  model: string;
  year: number;
  vin: string;
  color?: string;
  price: number;
  city: string;
  state: string;
  postal: number;
  longitude: number;
  latitude: number;
  description: string;
  seller: string;
  'seller-name': string;
  image: string;
  image_thumb: string;
}

const CarDetailsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [car, setCar] = useState<CarDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`/api/cars/${id}`);
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const data: CarDetails = await response.json();
        setCar(data);
      } catch (err: any) {
        console.error('Erreur lors de la récupération des détails de la voiture :', err);
        setError(`Échec du chargement des détails de la voiture : ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCarDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!car) {
    return <p>Voiture non trouvée.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">
            {car.make_id} - {car.model}
          </h1>
        </CardHeader>
        <CardContent>
          <img src={car.image} alt={car.model} className="w-full h-84 object-cover mb-4" />
          <p>
            <strong>Année :</strong> {car.year}
          </p>
          <p>
            <strong>VIN :</strong> {car.vin}
          </p>
          <p>
            <strong>Couleur :</strong> {car.color}
          </p>
          <p>
            <strong>Prix :</strong> ${car.price}
          </p>
          <p>
            <strong>Ville :</strong> {car.city}
          </p>
          <p>
            <strong>État :</strong> {car.state}
          </p>
          <p>
            <strong>Code postal :</strong> {car.postal}
          </p>
          <p>
            <strong>Description :</strong> {car.description}
          </p>
          <p>
            <strong>Vendeur :</strong> {car['seller-name']} ({car.seller})
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarDetailsPage;
