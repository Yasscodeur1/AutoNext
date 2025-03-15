import { Star, StarOff } from "lucide-react";

const FavoriteIcon = ({ isFavorited }: { isFavorited: boolean }) => {
  return (
    <div>
      {isFavorited ? (
        <Star className="h-6 w-6 text-yellow-500 " />
      ) : (
        <StarOff className="h-6 w-6 text-gray-500 dark:text-white" />
      )}
    </div>
  );
};

export default FavoriteIcon;

