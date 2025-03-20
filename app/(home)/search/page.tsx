"use client";

import { useSearchParams } from "next/navigation";
import useFetchCars from "@/hooks/useFetchCars";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const { cars, loading, error } = useFetchCars();

  const filteredCars = cars.filter(
    (car) =>
      car.make_id.toLowerCase().includes(query) ||
      car.model.toLowerCase().includes(query)
  );

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (
          <Card key={car.id} className="shadow-md rounded-xl">
            <CardHeader>
              <h2 className="text-xl font-bold">
                {car.make_id} - {car.model}
              </h2>
            </CardHeader>
            <CardContent>
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <p>
                <strong>Prix&nbsp;:</strong> ${car.price}
              </p>
              <p>
                <strong>Ville&nbsp;:</strong> {car.city}
              </p>
              <p>
                <strong>Année&nbsp;:</strong> {car.year}
              </p>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>Aucun résultat trouvé pour &quot;{query}&quot;.</p>
      )}
    </div>
  );
}
