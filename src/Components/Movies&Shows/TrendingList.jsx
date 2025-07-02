import React from "react";
import PaginatedGrid from "../PaginatedGrid";
import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import Spinner from "../Spinner";
const fetchTrendingMedia = async (mediaType = "movie", apiKey) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${apiKey}`
  );
  const data = await response.json();
  return data.results;
};

const TrendingList = ({ mediaType = "movie" }) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { data, isLoading, error } = useQuery({
    queryKey: ["trendingMovies", mediaType],
    queryFn: () => fetchTrendingMedia(mediaType, apiKey),
    enabled: !!apiKey,
  });

  console.log(data);
  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <PaginatedGrid
        title={"Trending Now"}
        itemsPerPage={5}
        items={data}
        renderItem={(movie) => (
          <Card key={movie.id} movie={movie} mediaType={mediaType} />
        )}
      ></PaginatedGrid>
    </div>
  );
};

export default TrendingList;
