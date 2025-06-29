import React from "react";
import PaginatedGrid from "../PaginatedGrid";
import Categories from "../HomeComp/Categories";

const OurGenres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 35, name: "Comedy" },
  { id: 16, name: "Animation" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const OurGenresList = () => {
  return (
    <>
      <PaginatedGrid
        title={"Our Genres"}
        itemsPerPage={5}
        renderItem={() => null}
        items={OurGenres}
      >
        {(visibleGenres) => <Categories visibleGenres={visibleGenres} />}
      </PaginatedGrid>
    </>
  );
};

export default OurGenresList;
