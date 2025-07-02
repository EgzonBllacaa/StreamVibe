// PopularMoviesByCategory.jsx
import { useQueries } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

const PopularByCategory = ({
  visibleGenres = [],
  apiKey,
  fetchFunction,
  itemsPerGenre = 4,
  mediaType,
}) => {
  const movieQueries = useQueries({
    queries: visibleGenres.map((genre) => ({
      queryKey: ["movies", genre.id],
      queryFn: () => fetchFunction(genre.id, apiKey, itemsPerGenre),
      staleTime: 1000 * 60 * 5,
      enabled: !!apiKey,
    })),
  });
  console.log(movieQueries[0]);

  const isLoading = movieQueries.some((q) => q.isLoading);
  const isError = movieQueries.some((q) => q.isError);

  if (isLoading) return <Spinner />;
  if (isError) return <p>Something went wrong while fetching movies.</p>;

  return (
    <div className="flex flex-wrap justify-between gap-6">
      {visibleGenres.map((genre, index) => {
        const movies = movieQueries[index]?.data;

        return (
          <Link
            to={`/genre/${mediaType}/${genre.id}`}
            state={{ genreName: genre.name }}
          >
            <div
              key={genre.id}
              className="flex flex-col p-6 text-white border shadow-md gap-7 border-black-12 bg-black-10 rounded-xl"
            >
              <div className="grid grid-cols-2 gap-2">
                {movies?.map((movie) => (
                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="object-cover rounded max-w-34 "
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">{genre.name}</h4>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PopularByCategory;
