import PaginatedGrid from "../PaginatedGrid";
import Categories from "./Categories";

// List all the genres in the array with objects
const ALL_GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const ExploreCategories = () => {
  return (
    <PaginatedGrid
      title="Explore Categories"
      description="From Action to Romance, discover your favorite genre."
      items={ALL_GENRES}
      itemsPerPage={5}
      renderItem={() => null}
    >
      {(visibleGenres) => <Categories visibleGenres={visibleGenres} />}
    </PaginatedGrid>
  );
};

export default ExploreCategories;
