import React, { useState } from "react";
import Pagination from "./Pagination";

const PaginatedGrid = ({
  title,
  description,
  items,
  itemsPerPage,
  renderItem,
  children,
}) => {
  const [page, setPage] = useState(0);

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(items?.length / itemsPerPage);
  const visibleGenres = Array.isArray(items)
    ? items.slice(startIndex, endIndex)
    : [];

  const renderedItems = renderItem ? (
    <div className="flex items-center justify-center gap-7">
      {visibleGenres?.map((item) => renderItem(item))}
    </div>
  ) : null;
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-25">
        <div className="flex flex-col flex-1 gap-4 ">
          {title && <h2 className="text-4xl font-medium">{title}</h2>}
          {description && <p className="text-lg text-gray-60">{description}</p>}
        </div>
        <Pagination
          endIndex={endIndex}
          ALL_GENRES={items}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
      <>
        {typeof children === "function"
          ? children(visibleGenres)
          : renderedItems}
      </>
    </div>
  );
};

export default PaginatedGrid;
