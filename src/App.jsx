import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import MovieTvShows from "./Pages/MovieTvShows";
import Support from "./Pages/Support";
import Subscriptions from "./Pages/Subscriptions";
import MovieDetails from "./Pages/MovieDetails";
import GenreLists from "./Components/GenreLists";
import WatchlistPage from "./Pages/WatchlistPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-[1600px] lg:px-16 xl:px-30 2xl:px-4 px-4  mx-auto mt-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies&shows" element={<MovieTvShows />} />
          <Route
            path="/movie/:id"
            element={<MovieDetails mediaType="movie" />}
          />
          <Route path="/genre/:mediaType/:genreId" element={<GenreLists />} />
          <Route path="/tv/:id" element={<MovieDetails mediaType="tv" />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
