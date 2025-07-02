import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie, mediaType }) => {
  // Removed genreId as it's not directly used in Card's link logic
  console.log(
    "Rendering Card:",
    movie.title || movie.name,
    movie.id,
    mediaType
  );
  return (
    <Link to={`/${mediaType}/${movie.id}`}>
      <div
        key={movie.id}
        className="flex flex-col w-full gap-2 border border-black-12 p-7 bg-black-10 rounded-xl"
      >
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
          alt={movie.title || movie.name} // Use movie.name for TV shows if title is missing
          className="w-full"
        />
        <div className="flex justify-between">
          <span className="flex items-center gap-1">
            {Math.floor(movie.vote_average)}
            <FontAwesomeIcon className="text-amber-400" icon={faStar} />
          </span>
          <span className="flex items-center gap-1">
            {Math.floor(movie.popularity)}K
            <FontAwesomeIcon icon={faEye} className="text-blue-400" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
