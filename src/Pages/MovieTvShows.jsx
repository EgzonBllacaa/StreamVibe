import { useState } from "react";
import Hero from "../Components/Movies&Shows/Hero";
import Categories from "../Components/Movies&Shows/Categories";
import TvCategories from "../Components/Movies&Shows/TvCategories";
import FreeTrial from "../Components/HomeComp/FreeTrial";
import ScrollToTop from "../Components/ScrollToTop";
import Button from "../Components/Button";
import ButtonCta from "../Components/ButtonCta";

const MovieTvShows = () => {
  const [showItems, setShowItems] = useState("Movies");
  return (
    <>
      <div className="flex flex-col gap-37">
        <ScrollToTop />
        <Hero />
        <div className="flex w-full bg-black-06 border rounded border-black-15  sm:hidden">
          <div className="w-full" onClick={() => setShowItems("Movies")}>
            {showItems === "Movies" ? (
              <ButtonCta className="w-full  text-lg" children={"Movies"} />
            ) : (
              <Button children={"Movies"} />
            )}
          </div>
          <div className="w-full" onClick={() => setShowItems("Shows")}>
            {showItems === "Shows" ? (
              <ButtonCta className="w-full  text-lg" children={"Shows"} />
            ) : (
              <Button children={"Shows"} />
            )}
          </div>
        </div>
        <div className="block sm:hidden">
          {showItems === "Movies" ? <Categories /> : <TvCategories />}
        </div>
        <Categories />
        <TvCategories />
        <FreeTrial />
      </div>
    </>
  );
};

export default MovieTvShows;
