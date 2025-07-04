import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import PaginatedGrid from "./PaginatedGrid";
import Card from "./Card";
import MovieDetails from "../Pages/MovieDetails";
import Spinner from "./Spinner";
import ScrollToTop from "./ScrollToTop";

const fetchMoviesByGenre = async (genreId, mediaType) => {
  // Ensure genreId is passed here
  const apiKey = import.meta.env.VITE_API_KEY;
  // The 'endpoint' (now_playing/on_the_air) is for a general list.
  // To filter by genre, we need to use the 'discover' endpoint with 'with_genres'.
  // The 'genreId' parameter is crucial here.
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&language=en-US&page=1&with_genres=${genreId}`
  );

  const data = await response.json();

  return data.results;
};

const GenreLists = () => {
  const { genreId, mediaType } = useParams();
  const { state } = useLocation();
  const {
    data: items, // Renamed 'movies' to 'items' for clarity as it can be movies or TV shows
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["genre-items", genreId, mediaType], // Include mediaType in queryKey
    queryFn: () => fetchMoviesByGenre(genreId, mediaType), // Pass both genreId and mediaType
    staleTime: 1000 * 60 * 5, // optional: 5 min cache
  });

  if (isLoading) return <Spinner />;
  if (isError) return <p className="text-center">Something went wrong.</p>;

  console.log(items); // Log 'items'
  return (
    <div className="pb-15">
      <ScrollToTop />
      <PaginatedGrid
        title={`Genre: ${state.genreName || "N/A"} (${
          mediaType === "movie" ? "Movies" : "TV Shows"
        })`} // Dynamic title based on mediaType
        itemsPerPage={5}
        items={items}
        renderItem={(
          item // Renamed 'movie' to 'item' for generality
        ) => <Card key={item.id} movie={item} mediaType={mediaType} />}
      ></PaginatedGrid>
    </div>
  );
};

export default GenreLists;
