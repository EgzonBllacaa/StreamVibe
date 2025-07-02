// PopularTVShowsList.jsx
import React from "react";
import PaginatedGrid from "../PaginatedGrid";
import PopularByCategory from "./PopularByCategory";
import { useQuery } from "@tanstack/react-query";

const fetchTVGenres = async (apiKey) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`
  );
  const data = await res.json();
  return data.genres;
};

const fetchTVShowsByGenre = async (genreId, apiKey, limit) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${genreId}&sort_by=popularity.desc&page=1`
  );
  const data = await res.json();
  return data.results.slice(0, limit);
};

const PopularTVShowsList = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const {
    data: genres,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tvGenres"],
    queryFn: () => fetchTVGenres(apiKey),
    enabled: !!apiKey,
  });

  if (!apiKey) return <p className="text-red-500">API key not found.</p>;
  if (isLoading) return <p>Loading genres...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <PaginatedGrid
      items={genres}
      itemsPerPage={4}
      title={"Popular Top 10 In TV Genres"}
    >
      {(visibleGenres) => (
        <PopularByCategory
          visibleGenres={visibleGenres}
          apiKey={apiKey}
          fetchFunction={fetchTVShowsByGenre}
          itemsPerGenre={4}
        />
      )}
    </PaginatedGrid>
  );
};

export default PopularTVShowsList;
