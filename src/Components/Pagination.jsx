import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Pagination = ({ page, setPage, totalPages, ALL_GENRES, endIndex }) => {
  return (
    <>
      <div className="hidden sm:flex gap-4 p-4 rounded-xl bg-black-06 border-1 border-black-12">
        <button>
          <FontAwesomeIcon
            disabled={page === 0}
            onClick={() =>
              setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
            }
            icon={faArrowLeft}
            className="p-4 rounded-lg cursor-pointer text-absolute-white hover:bg-black-12 bg-black-10 min-w-4 border-1 border-black-12"
          />
        </button>

        <div className="flex items-center gap-1 rounded">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setPage(i)}
              className={`h-1 rounded hover:h-2 cursor-pointer ${
                i === page ? "w-6 bg-red-45" : "w-4 bg-black-20"
              }`}
            ></span>
          ))}
        </div>
        <button>
          <FontAwesomeIcon
            onClick={() => {
              setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
            }}
            disabled={endIndex >= ALL_GENRES?.length}
            icon={faArrowRight}
            className="p-4 rounded-lg cursor-pointer hover:bg-black-12 text-absolute-white bg-black-10 min-w-4 border-1 border-black-12"
          />
        </button>
      </div>
    </>
  );
};

export default Pagination;
