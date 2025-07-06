import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import StarRating from "../StarRating";
import MovieDetailCard from "../MovieDetailCard";
import ButtonCta from "../ButtonCta";
import {
  faArrowDown,
  faArrowUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Spinner from "../Spinner";
import useWatchlistStore from "../../store/watchlistStore";

const fetchMediaDetails = async (id, mediaType, apiKey) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&language=en-US`
  );
  const data = await response.json();
  return data;
};

const DetailsComponent = ({ mediaType }) => {
  const [openIds, setOpenIds] = useState([]);
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

  const { data, isLoading, error } = useQuery({
    queryKey: [mediaType, id],
    queryFn: () => fetchMediaDetails(id, mediaType, apiKey),
  });
  const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);
  const removeFromWatchlist = useWatchlistStore(
    (state) => state.removeFromWatchlist
  );
  const watchlist = useWatchlistStore((state) => state.watchlist);

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading details.</p>;
  const isInList = watchlist.some((movie) => movie.id === data.id);
  console.log(data);
  const toggleOpenIds = (seasonId) => {
    setOpenIds((prev) =>
      prev.includes(seasonId)
        ? prev.filter((item) => item !== seasonId)
        : [...prev, seasonId]
    );
  };
  return (
    <div className="min-h-[1200px] flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${
            data?.poster_path || data.belongs_to_collection?.poster_path
          }`}
          alt={data.title || data.name}
          className="mb-6 rounded-4xl w-fit"
        />
        {console.log(data)}
        {isInList ? (
          <button
            className="cursor-pointer"
            onClick={() => removeFromWatchlist(data.id)}
          >
            <FontAwesomeIcon className="text-red-600" icon={faHeart} />
          </button>
        ) : (
          <button
            className="cursor-pointer"
            onClick={() => addToWatchlist(data)}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        )}

        {data.number_of_episodes || data.number_of_seasons ? (
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-4xl font-bold">{data.title || data.name}</h1>
            <div className="flex justify-center gap-4">
              <ButtonCta children={`Seasons: ${data.number_of_seasons}`} />
              <ButtonCta children={`Episodes: ${data.number_of_episodes}`} />
            </div>
          </div>
        ) : (
          <h1 className="text-4xl font-bold">{data.title || data.name}</h1>
        )}
      </div>
      <div className="flex flex-col w-full gap-5 py-10">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col flex-1 gap-3 p-12 rounded bg-black-10">
              <MovieDetailCard
                title={"Description"}
                method={data.overview}
                isLarge
              />
            </div>
            {data.seasons && (
              <div className="flex flex-col flex-1 gap-3 p-12 rounded bg-black-10">
                <MovieDetailCard
                  title={"Seasons and Episodes"}
                  method={
                    <div className="flex flex-col max-w-[727px] gap-5 ">
                      {data.seasons.map((season) => (
                        <div
                          key={season.id ?? season.season_number}
                          onClick={() => toggleOpenIds(season.id)}
                          className="flex flex-col items-center"
                        >
                          <div className="flex items-center justify-between w-full px-12 py-6 rounded bg-black-06">
                            <div className="flex gap-2 rounded bg-black-06">
                              <h2> {season.name}</h2>
                              <span>Episodes {season.episode_count}</span>
                            </div>
                            {openIds.includes(season.id) ? (
                              <FontAwesomeIcon
                                className="bg-red-45 py-3.5 px-4 rounded-4xl  "
                                icon={faArrowUp}
                              />
                            ) : (
                              <FontAwesomeIcon
                                className="bg-black-08 py-3.5 px-4 rounded-4xl  "
                                icon={faArrowDown}
                              />
                            )}
                          </div>
                          {openIds.includes(season.id) && (
                            <div className="p-4 px-10 bg-black-06">
                              <h1 className="text-sm text-gray-400">
                                {season.air_date?.split("-").join(" / ")}
                              </h1>
                              <h2 className="mb-4 text-gray-400">
                                Overview of the season:
                              </h2>
                              <span>{season.overview}</span>
                              <img
                                className="mx-auto mt-5 max-w-40"
                                src={`https://image.tmdb.org/t/p/w500${
                                  data.poster_path ||
                                  data.belongs_to_collection.poster_path
                                }`}
                                alt={data.name}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  }
                  isLarge
                />
              </div>
            )}
          </div>
          <div className="flex flex-col flex-wrap gap-3 p-12 rounded md:max-w-5/12 bg-black-10">
            <div className="flex flex-col flex-wrap gap-5">
              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col gap-2">
                  <MovieDetailCard
                    data={data}
                    title={"Release Date:"}
                    method={
                      data.release_date?.split("-").join(" / ") ||
                      data.first_air_date
                    }
                  />
                </div>
                <div className="flex  flex-col gap-2">
                  <MovieDetailCard
                    data={data}
                    title={"Budget:"}
                    method={`$${
                      data?.budget?.toLocaleString("en-US") || "N/A"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <MovieDetailCard
                    data={data}
                    title={`Rate: ${Math.round(data.vote_average)}/10`}
                    method={<StarRating rating={data.vote_average} />}
                    Component
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-10">
                {data.number_of_episodes && (
                  <div className="flex gap-10 px-4 py-2 border-2 border-black-15 rounded-xl">
                    <MovieDetailCard
                      data={data}
                      title={"Number of Episodes:"}
                      method={
                        <div className="flex flex-wrap gap-4">
                          <span>{data.number_of_episodes}</span>
                        </div>
                      }
                    />
                    <MovieDetailCard
                      title={`Number of seasons:`}
                      method={data.number_of_seasons}
                    />
                  </div>
                )}
                <div className="flex flex-wrap gap-10 px-4 py-2 border-2 border-black-15 rounded-xl">
                  <MovieDetailCard
                    data={data}
                    title={"Genres:"}
                    method={
                      <div className="flex flex-wrap gap-4">
                        {data.genres.map((genre) => (
                          <span
                            key={genre.id}
                            className="px-3 py-1 border-2 rounded-lg cursor-pointer bg-black-08 border-black-15 hover:bg-white hover:text-black w-fit"
                          >
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    }
                  />

                  <MovieDetailCard
                    title={`Movie made by:`}
                    method={data.origin_country}
                  />
                </div>
                <div className="flex gap-10 px-4 py-2 border-2 border-black-15 rounded-xl">
                  <MovieDetailCard
                    title={`Spoken languages:`}
                    method={
                      <div className="flex gap-4">
                        {data.spoken_languages.map((lang, index) => (
                          <span
                            key={index}
                            className="px-4 py-1 border-2 rounded-lg cursor-pointer bg-black-08 border-black-15 hover:bg-white hover:text-black w-fit"
                          >
                            {lang.name}
                          </span>
                        ))}
                      </div>
                    }
                  />

                  <MovieDetailCard title={`Status`} method={data.status} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full p-12 rounded bg-black-10">
          <div className="flex items-end justify-start overflow-x-auto md:justify-center gap-20">
            {data.production_companies.map((companies) => (
              <div
                key={companies.id}
                className="flex flex-col items-center justify-end gap-10"
              >
                <img
                  className="p-4 max-w-30 "
                  src={`https://image.tmdb.org/t/p/w500${companies.logo_path}`}
                  alt={companies.origin_country}
                />
                <span
                  key={companies.id}
                  className="px-4 py-2 border-2 rounded-lg cursor-pointer bg-black-08 border-black-12 hover:bg-white hover:text-black w-fit"
                >
                  {companies.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
