import React from "react";
import subContainer from "../../assets/subContainer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ButtonCta from "../ButtonCta";
const Hero = () => {
  return (
    <div className="flex flex-col items-center mb-50">
      <img src={subContainer} alt="" />
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl font-bold text-absolute-white">
            The Best Streaming Experience
          </h1>
          <p className="text-center text-gray-60 w-5xl">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </div>
        <ButtonCta>
          <FontAwesomeIcon icon={faPlay} />
          Start Watching Now
        </ButtonCta>
      </div>
    </div>
  );
};

export default Hero;
