import { useQueries } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const fetchMediaByGenre = async (genreId, apiKey, mediaType) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&with_genres=${genreId}&sort_by=popularity.desc&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results.slice(0, 4);
};

const Categories = ({ visibleGenres = [], mediaType = "movie" }) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const mediaQueries = useQueries({
    queries: visibleGenres.length
      ? visibleGenres.map((genre) => ({
          queryKey: [mediaType, genre.id],
          queryFn: () => fetchMediaByGenre(genre.id, apiKey, mediaType),
          staleTime: 1000 * 60 * 5,
        }))
      : [],
  });

  if (!visibleGenres || !Array.isArray(visibleGenres)) {
    return null;
  }

  const isLoading = mediaQueries.some((q) => q.isLoading);
  const isError = mediaQueries.some((q) => q.isError);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <div className="flex flex-wrap items-center justify-center gap-7 ">
      {mediaQueries.map((q, index) => {
        const genre = visibleGenres[index];
        return (
          <Link
            to={`/genre/${mediaType}/${genre.id}`}
            state={{ genreName: genre.name }}
          >
            <div
              key={genre.id}
              className="flex flex-col gap-2 border border-black-12 p-7 bg-black-10 rounded-xl"
            >
              <div className="grid grid-cols-2 gap-2.5">
                {q.data.map((item) => (
                  <img
                    key={item.id}
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    alt={item.title || item.name}
                    className="max-w-2 min-w-25"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium">{genre.name}</h4>
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

export default Categories;
