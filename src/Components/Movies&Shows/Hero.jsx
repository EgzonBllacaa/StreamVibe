import { useQuery } from "@tanstack/react-query";
import ButtonCta from "../ButtonCta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

const Hero = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      if (!response.ok) return;
      return response.json();
    },
  });

  if (isLoading) return <Spinner />;
  if (isError) return <p>{error.message}</p>;
  const movies = data?.results || [];
  const slicedMovies = movies.slice(0, 3);
  const movie = slicedMovies[currentIndex];
  if (movies.length === 0) return <p>No movies found.</p>;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slicedMovies.length - 1 : prev - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === slicedMovies.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="">
      <div className="flex flex-col items-center gap-8 ">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt=""
        />
        <div className="flex flex-col gap-7.5 items-center">
          <div className="flex flex-col items-center gap-3 px-50">
            <h1 className="text-3xl font-bold">{movie?.title}</h1>
            <p className="font-medium text-center text text-gray-60">
              {movie?.overview.slice(0, 240)}...
            </p>
          </div>
          <Link to={`/movie/${movie.id}`}>
            <ButtonCta children={"See Details now"} />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="cursor-pointer hover:text-gray-70"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="flex gap-2">
          {slicedMovies.map((_, id) => (
            <span
              key={id}
              onClick={() => setCurrentIndex(id)}
              className={`w-4 h-1 rounded-3xl cursor-pointer hover:bg-red-300 ${
                id === currentIndex ? " bg-red-50 w-6" : "bg-gray-60"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="cursor-pointer hover:text-gray-70"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
