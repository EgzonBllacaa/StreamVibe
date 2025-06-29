import FreeTrial from "../Components/HomeComp/FreeTrial";
import DetailsComponent from "../Components/Movies&Shows/DetailsComponent";

const MovieDetails = ({ mediaType = "movie" }) => {
  return (
    <>
      <DetailsComponent mediaType={mediaType} />
      <FreeTrial />
    </>
  );
};

export default MovieDetails;
