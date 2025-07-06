import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useWatchlistStore from "../store/watchlistStore";

const Card = ({ movie, mediaType }) => {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } =
    useWatchlistStore();

  const saved = isInWatchlist(movie.id);
  return (
    <div
      key={movie.id}
      className="flex flex-col w-full gap-2 border border-black-12 p-7 bg-black-10 rounded-xl"
    >
      {" "}
      <div className="flex  items-center gap-1">
        {[...Array.from({ length: Math.floor(movie.vote_average) })].map(
          (_, i) => (
            <>
              <FontAwesomeIcon
                key={i}
                className="text-amber-400 max-w-3"
                icon={faStar}
              />
            </>
          )
        )}
        <small>({Math.floor(movie.vote_average)})</small>
      </div>
      <Link to={`/${mediaType}/${movie.id}`}>
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
          alt={movie.title || movie.name}
          className="max-w-28 md:max-w-40 lg:max-w-60 xl:max-w-none xl:w-full"
        />
      </Link>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="flex items-center gap-1">
            {Math.floor(movie.popularity)}K
            <FontAwesomeIcon icon={faEye} className="text-blue-400" />
          </span>
        </div>
        <button
          className="px-3 cursor-pointer"
          onClick={() =>
            saved ? removeFromWatchlist(movie.id) : addToWatchlist(movie)
          }
        >
          {saved ? "❤" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default Card;
