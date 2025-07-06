import React from "react";
import ButtonCta from "../ButtonCta";
import PopularTVShowsList from "./PopularTvShowsList";
import OurTVGenresList from "./OurTvGenresList";
import TrendingList from "./TrendingList";
import NewReleasesList from "./NewReleasesList";
import MustWatchList from "./MustWatchList";

const TvCategories = () => {
  return (
    <div className="relative flex flex-col px-10 py-12 border-2 border-black-15 gap-36">
      <span className="hidden sm:absolute sm:-top-8">
        <ButtonCta children={"Tv Shows"} />
      </span>
      <OurTVGenresList />
      <PopularTVShowsList />
      <TrendingList mediaType="tv" />
      <NewReleasesList mediaType="tv" />
      <MustWatchList mediaType="tv" />
    </div>
  );
};

export default TvCategories;
