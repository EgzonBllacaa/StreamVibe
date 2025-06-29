import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import MovieTvShows from "./Pages/MovieTvShows";
import Support from "./Pages/Support";
import Subscriptions from "./Pages/Subscriptions";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  return (
    <Router>
      <div className="max-w-[1600px] mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies&shows" element={<MovieTvShows />} />
          <Route
            path="/movie/:id"
            element={<MovieDetails mediaType="movie" />}
          />
          <Route path="/tv/:id" element={<MovieDetails mediaType="tv" />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
