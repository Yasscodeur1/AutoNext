import { NextApiRequest, NextApiResponse } from 'next';

// Mock function to simulate fetching car details from a data source
const getCarDetailsById = (id: string | string[] | undefined) => {
  // Replace this with actual data fetching logic
  const cars = [
    { id: '1', model: 'Car A', description: 'Description of Car A' },
    { id: '2', model: 'Car B', description: 'Description of Car B' },
  ];
  return cars.find(car => car.id === id);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: 'Car ID is required' });
  }

  const car = getCarDetailsById(id);

  if (car) {
    res.status(200).json(car);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
}
