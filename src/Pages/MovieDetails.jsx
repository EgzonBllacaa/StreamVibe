import FreeTrial from "../Components/HomeComp/FreeTrial";
import DetailsComponent from "../Components/Movies&Shows/DetailsComponent";
import ScrollToTop from "../Components/ScrollToTop";

const MovieDetails = ({ mediaType = "movie" }) => {
  return (
    <>
      <ScrollToTop />
      <DetailsComponent mediaType={mediaType} />
      <FreeTrial />
    </>
  );
};

export default MovieDetails;
