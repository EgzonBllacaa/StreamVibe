const BoxActive = ({ first, second, category, setCategory }) => {
  return (
    <div className="flex items-center gap-5 p-2 border-black-12 bg-black-06 border-1 rounded-xl">
      <button
        onClick={() => setCategory(first)}
        className={`text-lg py-3 px-6
            ${
              category === first
                ? " text-absolute-white rounded-lg bg-black-12"
                : "text-gray-60"
            }
          `}
      >
        {first}
      </button>
      <button
        onClick={() => setCategory(second)}
        className={`text-lg py-3 px-6
            ${
              category === second
                ? " text-absolute-white rounded-lg bg-black-12"
                : "text-gray-60 "
            }
          `}
      >
        {second}
      </button>
    </div>
  );
};

export default BoxActive;
