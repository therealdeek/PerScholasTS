import { useMemo } from "react";
import { usePagination } from "../hooks/usePagination";

export function PaginationDemo() {
  const items = useMemo(
    () => Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`),
    [],
  );

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(items.length, 10, 1);

  const currentItems =
    items.length === 0 ? [] : items.slice(startIndex, endIndex + 1);

  return (
    <section>
      <h2>Pagination Demo</h2>

      <p>
        Current Page: {currentPage} / {totalPages}
      </p>

      <p>
        Start Index: {startIndex} | End Index: {endIndex} | Items On Current
        Page: {itemsOnCurrentPage}
      </p>

      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div>
        <button onClick={prevPage} disabled={!canPrevPage}>
          Previous
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
      </div>

      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => setPage(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          ),
        )}
      </div>
    </section>
  );
}
