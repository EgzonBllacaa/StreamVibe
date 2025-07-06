import { faEye, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import useWatchlistStore from "../store/watchlistStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import ScrollToTop from "../Components/ScrollToTop";

const WatchlistPage = () => {
  const { watchlist, removeFromWatchlist } = useWatchlistStore();
  const [filter, setFilter] = useState("all");

  const filteredWatchlist = useMemo(() => {
    return watchlist.filter((item) => {
      if (filter === "all") return true;
      return item.type === filter;
    });
  }, [filter, watchlist]);

  if (watchlist.length === 0)
    return (
      <p className="py-28 text-4xl text-red-500 text-center ">
        No items in watchlist yet...
      </p>
    );
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col ">
        <div className="flex flex-wrap items-center gap-10 mb-10">
          <h1 className="text-4xl font-semibold">Watchlist</h1>
          <div
            className="flex gap-4 
           items-center"
          >
            {["all", "movie", "tv"].map((type) => (
              <button
                className={`py-2 px-8 cursor-pointer  ${
                  filter === type
                    ? "bg-red-900  rounded-xl "
                    : "border border-black-15 rounded-xl hover:bg-red-900/85"
                }`}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 pb-14 flex-wrap py-40">
          {filteredWatchlist.map((movie) => (
            <div
              key={movie.id}
              className="flex flex-col w- gap-2 border border-black-12 p-7 bg-black-10 rounded-xl"
            >
              <Link
                to={`${
                  movie.media_type === "tv"
                    ? `/tv/${movie.id}`
                    : `/movie/${movie.id}`
                }`}
              >
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
                  alt={movie.title || movie.name}
                  className="w-fit"
                />
              </Link>
              <div className="flex justify-between">
                <div className="flex">
                  <span className="flex items-center gap-1">
                    {Math.floor(movie.vote_average)}
                    <FontAwesomeIcon className="text-amber-400" icon={faStar} />
                  </span>
                  <span className="flex items-center gap-1">
                    {Math.floor(movie.popularity)}K
                    <FontAwesomeIcon icon={faEye} className="text-blue-400" />
                  </span>
                </div>
                <button
                  className="cursor-pointer"
                  onClick={() => removeFromWatchlist(movie.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WatchlistPage;
