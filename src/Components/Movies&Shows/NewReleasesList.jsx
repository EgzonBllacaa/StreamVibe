import React from "react";
import PaginatedGrid from "../PaginatedGrid";
import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

const newReleasesFetch = async (mediaType, apiKey) => {
  const endpoint = mediaType === "movie" ? "now_playing" : "on_the_air";
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${endpoint}?api_key=${apiKey}&language=en-US&page=1`
  );

  const data = await response.json();

  return data.results;
};

const NewReleasesList = ({ mediaType = "movie" }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["New Release", mediaType],
    queryFn: () => newReleasesFetch(mediaType, apiKey),
  });

  console.log(data);

  if (isLoading) return <Spinner />;
  if (isError) return <p>{error.message}</p>;
  return (
    <div>
      <PaginatedGrid
        title={"New Releases"}
        itemsPerPage={5}
        items={data}
        renderItem={(movie) => (
          <Card key={movie.id} movie={movie} mediaType={mediaType} />
        )}
      ></PaginatedGrid>
    </div>
  );
};

export default NewReleasesList;
