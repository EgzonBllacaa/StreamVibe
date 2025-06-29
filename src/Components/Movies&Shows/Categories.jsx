import React from "react";
import ExploreCategories from "../HomeComp/ExploreCategories";
import OurGenresList from "./OurGenresList";
import PopularMoviesByCategory from "./PopularByCategory";
import PopularList from "./PopularList";
import TrendingList from "./TrendingList";
import NewReleasesList from "./NewReleasesList";
import MustWatchList from "./MustWatchList";
import ButtonCta from "../ButtonCta";

const Categories = () => {
  return (
    <div className="relative flex flex-col px-10 py-12 border-2 border-black-15 gap-36">
      <span className="absolute -top-8">
        <ButtonCta children={"Movies"} />
      </span>
      <OurGenresList />
      <PopularList />
      <TrendingList mediaType="movie" />
      <NewReleasesList mediaType="movie" />
      <MustWatchList mediaType="movie" />
    </div>
  );
};

export default Categories;
