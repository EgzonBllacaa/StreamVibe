import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StarRating = ({ rating }) => {
  const rounded = Math.round(rating);
  return (
    <span className="flex gap-1 text-yellow-300">
      {Array(rounded)
        .fill()
        .map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
    </span>
  );
};

export default StarRating;
