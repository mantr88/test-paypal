import clsx from "clsx";
import React, {useState} from "react";
import Heart from "./svgElements/Heart";

interface FavoriteHeartProps {
  addStyles?: string;
  iconStyles?: string;
}

function FavoriteHeart({addStyles, iconStyles}: FavoriteHeartProps) {
  const [isFavorite, setIsFavorite] = useState(false); //temporary solution

  const handleFavoriteIconClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(e);
    e.stopPropagation();
    setIsFavorite(!isFavorite); //temporary solution
  };
  return (
    <div
      onClick={(e) => handleFavoriteIconClick(e)}
      className={`${addStyles} standart-animation group flex cursor-pointer items-center justify-center rounded-full bg-orange-300 text-orange-700 lg:hover:bg-orange-600 lg:hover:text-white`}
    >
      <Heart
        className={clsx(
          iconStyles,
          isFavorite && "fill-orange-700 lg:group-hover:fill-white",
          "lg:h-6 lg:w-6"
        )}
      />
    </div>
  );
}

export default FavoriteHeart;
