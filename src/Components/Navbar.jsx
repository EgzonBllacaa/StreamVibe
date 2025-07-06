import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faClose } from "@fortawesome/free-solid-svg-icons";
import streamVibeLogo from "../assets/streamvibelogo.png";
import NavButton from "./NavButton";
import { useRef, useState, useMemo, useEffect } from "react"; // Import useMemo
import { Link } from "react-router-dom";
import UseSearchResults from "./UseSearchResults";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import useDebounce from "./useDebounce";
import Spinner from "./Spinner";
import WatchlistPage from "../Pages/WatchlistPage";
import useWatchlistStore from "../store/watchlistStore";

const Navbar = () => {
  const inputRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const lastScroll = useRef(0);
  const debounce = useDebounce(searchInput, 300);
  const { watchlist } = useWatchlistStore();

  const totalItems = watchlist.length;
  const { data = [], isLoading, isError } = UseSearchResults(debounce);

  const filteredData = useMemo(() => {
    if (searchInput.trim() === "") {
      return [];
    }
    return data.filter((item) => {
      const name = item.title || item.name || "";
      return name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }, [searchInput, data]);

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll >= 100) {
        setIsActive(false);
      } else if (currentScroll < lastScroll.current) {
        setIsActive(true);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed flex items-center w-full lg:h-fit h-4 z-20 transition-transform duration-700 ease-in-out px-4  lg:px-16 xl:px-36   pb-10 justify-between transform ${
        isActive ? "translate-y-0 opacity-100" : "-translate-y-full "
      } xl:grid-cols-3 lg:flex-wrap backdrop-blur-2xl  lg:justify-between lg:flex py-7`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src={streamVibeLogo}
          alt=""
          className="xl:min-w-15 xl:min-h-15 lg:max-w-10 lg:max-h-10 max-w-5 max-h-5"
        />
        <Link
          to={"/"}
          className="font-black lg:text-lg xl:text-2xl text-absolute-white"
        >
          StreamVibe
        </Link>
      </div>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex bg-black-06 gap-2 w-fit text-gray-75 p-2.5 items-center rounded-xl border-4 border-black-12">
        <NavButton to={"/"} label={"Home"} />
        <div className="text-nowrap">
          <NavButton label={"Movies & Shows"} to="/movies&shows"></NavButton>
        </div>
        <NavButton to={"/support"} label={"Support"} />
        <NavButton to={"/subscriptions"} label={"Subscriptions"} />
      </nav>
      {/* Search */}
      <div className="relative flex-wrap items-center justify-end hidden gap-5 md:flex">
        {isLoading && <Spinner />}
        {isError && <p>Something went wrong! </p>}
        <input
          ref={inputRef}
          placeholder="Search movies or shows"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setSearchIsOpen(true);
          }}
          type="text"
          className={`z-30 p-2 border rounded text-white border-zinc-800`} // Added basic styling
        />
        <FontAwesomeIcon
          onClick={() => inputRef.current.focus()}
          icon={faSearch}
          className="cursor-pointer xl:min-h-7 xl:min-w-7 lg:min-w-6 lg:min-h-6 text-absolute-white"
        />
        <div
          className={`fixed inset-0  z-10 bg-opacity-30 transition-opacity duration-500 ease-in-out  ${
            // z-20 for overlay
            searchIsOpen && filteredData.length > 0
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => {
            setSearchIsOpen(false);
            setSearchInput("");
          }} // Close menu when overlay is clicked
        ></div>
        {searchIsOpen &&
          filteredData.length > 0 &&
          searchInput.trim() !== "" && (
            <div className="absolute right-0 z-10 overflow-y-auto rounded shadow-lg xl:right-0 xl:w-120 w-70 max-h-100 top-12 bg-black-10 text-absolute-white ">
              {filteredData.map((item) => (
                <Link
                  to={`${item.title ? `/movie/${item.id}` : `/tv/${item.id}`}`}
                  onClick={() => setSearchInput("")}
                >
                  <div
                    key={item.id}
                    className="flex gap-4 p-2 cursor-pointer hover:bg-black-12"
                  >
                    {console.log(item)}
                    {item.poster_path || item.profile_path ? (
                      <img
                        className="max-w-15 xl:max-w-20 xl:h-auto"
                        src={`https://image.tmdb.org/t/p/w500${
                          item.poster_path || item.profile_path
                        }`}
                        alt=""
                      />
                    ) : (
                      <span className="text-red-60">No image </span>
                    )}
                    <div className="flex flex-col">
                      <h3>{item.title || item.name}</h3>
                      <div className="flex flex-col justify-between h-full">
                        <span>
                          Type of:{" "}
                          {item.media_type.charAt(0).toUpperCase() +
                            item.media_type.slice(1)}
                        </span>
                        {(item.release_date || item.first_air_date) && (
                          <span>
                            Released Year:{" "}
                            {item.release_date
                              ? item.release_date.split("-")[0]
                              : item.first_air_date}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        <Link
          className="text-red-600 font-bold flex gap-2 items-center"
          to={"/watchlist"}
          element={<WatchlistPage />}
        >
          <FontAwesomeIcon
            icon={faBell}
            className="xl:min-h-7 xl:min-w-7 lg:min-w-6 lg:min-h-6 bg-transparent text-absolute-white"
          />
          {totalItems}
        </Link>
      </div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-3xl  bg-opacity-30 transition-opacity z-40 duration-500 ease-in-out  ${
          // z-20 for overlay
          menuIsOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuIsOpen(false)} // Close menu when overlay is clicked
      ></div>
      {/* Mobile Navbar */}
      <div
        onClick={() => setMenuIsOpen(false)}
        className={`z-20 fixed top-15 rounded-2xl right-0 transition-transform duration-300 transform ${
          menuIsOpen ? "translate-x-0" : "translate-x-full"
        }
        ${
          isActive ? "translate-y-0 opacity-100" : "-translate-y-full "
        } flex flex-col bg-black-06`}
      >
        <NavButton to={"/"} label={"Home"} />
        <div className="text-nowrap">
          <NavButton label={"Movies & Shows"} to="/movies&shows" />
        </div>
        <NavButton to={"/support"} label={"Support"} />
        <NavButton to={"/subscriptions"} label={"Subscriptions"} />
      </div>
      {/* Hamburger Menu */}
      <div
        className="z-20 block cursor-pointer lg:hidden"
        onClick={() => setMenuIsOpen((prev) => !prev)}
      >
        {menuIsOpen ? (
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        )}
      </div>
    </header>
  );
};

export default Navbar;
