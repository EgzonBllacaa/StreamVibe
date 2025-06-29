import React from "react";
import Hero from "../Components/Movies&Shows/Hero";
import Categories from "../Components/Movies&Shows/Categories";
import TvCategories from "../Components/Movies&Shows/TvCategories";
import FreeTrial from "../Components/HomeComp/FreeTrial";

const MovieTvShows = () => {
  return (
    <>
      <div className="flex flex-col gap-37">
        <Hero />
        <Categories />
        <TvCategories />
        <FreeTrial />
      </div>
    </>
  );
};

export default MovieTvShows;
