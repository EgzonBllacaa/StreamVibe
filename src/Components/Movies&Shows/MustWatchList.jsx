import React from "react";
import PaginatedGrid from "../PaginatedGrid";
import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import { Link } from "react-router-dom";

const mustWatchFetch = async (mediaType, apiKey) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = await response.json();

  return data.results;
};

const MustWatchList = ({ mediaType = "movie" }) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["mustWatch", mediaType],
    queryFn: () => mustWatchFetch(mediaType, apiKey),
  });
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <PaginatedGrid
        items={data}
        itemsPerPage={4}
        title={`Must - Watch ${mediaType === "movie" ? "Movies" : "TV Shows"}`}
        renderItem={(movie) => (
          <Card key={movie.id} movie={movie} mediaType={mediaType} />
        )}
      />
    </div>
  );
};

export default MustWatchList;
