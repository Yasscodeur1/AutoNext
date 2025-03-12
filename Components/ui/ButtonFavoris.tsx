// Exemple avec Heroicons
// import { StarIcon, StarOutlineIcon } from '@heroicons/react/24/outline';

import { Star, StarOff } from "lucide-react";

const FavoriteIcon = ({ isFavorited }: { isFavorited: boolean }) => {
  return (
    <div>
      {isFavorited ? (
        <Star className="h-6 w-6 text-yellow-500" />
      ) : (
        <StarOff className="h-6 w-6 text-gray-500" />
      )}
    </div>
  );
};

export default FavoriteIcon;

