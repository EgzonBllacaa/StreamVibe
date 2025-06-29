import { useQuery } from "@tanstack/react-query";
import React from "react";

const UseSearchResults = (searchText) => {
  return useQuery({
    queryKey: ["search", searchText],
    queryFn: async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(
          searchText
        )}&language=en-US&page=1&include_adult=false`
      );
      const data = await response.json();
      return data.results;
    },
    enabled: !!searchText,
  });
};

export default UseSearchResults;
