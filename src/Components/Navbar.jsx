import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import streamVibeLogo from "../assets/streamvibelogo.png";
import NavButton from "./NavButton";
import { useRef, useState, useMemo } from "react"; // Import useMemo
import { Link } from "react-router-dom";
import UseSearchResults from "./UseSearchResults";

const Navbar = () => {
  const inputRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");

  const { data = [], isLoading, isError } = UseSearchResults(searchInput);

  // Use useMemo to memoize filteredData.
  // It will only re-calculate if searchInput or data changes.
  const filteredData = useMemo(() => {
    if (searchInput.trim() === "") {
      return [];
    }
    return data.filter((item) => {
      const name = item.title || item.name || "";
      return name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }, [searchInput, data]); // Dependencies for useMemo

  return (
    <header className="grid items-center w-full grid-cols-3 py-7">
      <div className="flex items-center gap-2">
        <img src={streamVibeLogo} alt="" />
        <Link to={"/"} className="text-2xl font-black text-absolute-white">
          StreamVibe
        </Link>
      </div>
      <nav className="flex bg-black-06 gap-2 w-fit text-gray-75 p-2.5 items-center rounded-xl border-4 border-black-12">
        <NavButton to={"/"} label={"Home"} />
        <div className="text-nowrap">
          <NavButton label={"Movies & Shows"} to="/movies&shows"></NavButton>
        </div>
        <NavButton to={"/support"} label={"Support"} />
        <NavButton to={"/subscriptions"} label={"Subscriptions"} />
      </nav>
      <div className="relative flex items-center justify-end gap-5 ">
        <input
          ref={inputRef}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="p-2 border border-gray-400 rounded" // Added basic styling
        />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong! </p>}
        <FontAwesomeIcon
          onClick={() => inputRef.current.focus()}
          icon={faSearch}
          className="cursor-pointer min-h-6 min-w-6 text-absolute-white"
        />

        {filteredData.length > 0 && searchInput.trim() !== "" && (
          <ul className="absolute z-10 overflow-y-auto rounded shadow-lg w-50 right-22 top-12 bg-black-10 text-absolute-white max-h-60">
            {filteredData.map((item) => (
              <li
                key={item.id}
                className="p-2 cursor-pointer hover:bg-black-12"
              >
                <Link
                  onClick={() => setSearchInput("")}
                  to={`${item.title ? `/movie/${item.id}` : `/tv/${item.id}`}`}
                >
                  {item.title || item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <FontAwesomeIcon
          icon={faBell}
          className="min-h-6 min-w-6 text-absolute-white"
        />
      </div>
    </header>
  );
};

export default Navbar;
