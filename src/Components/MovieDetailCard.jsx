import React from "react";

const MovieDetailCard = ({ title, method, isLarge = false }) => {
  const isElement = React.isValidElement(method);
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-400">{title}</p>
      {isElement ? (
        <div className={`${isLarge ? "text-lg" : "text-sm"}`}>{method}</div>
      ) : (
        <p className={`${isLarge ? "text-lg" : "text-sm"}`}>{method}</p>
      )}
    </div>
  );
};

export default MovieDetailCard;
