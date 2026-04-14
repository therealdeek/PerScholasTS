import { useState } from "react";

type UsePaginationReturn = {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  itemsOnCurrentPage: number;
  setPage: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  canNextPage: boolean;
  canPrevPage: boolean;
};

export function usePagination(
  totalItems: number,
  itemsPerPage: number = 10,
  initialPage: number = 1,
): UsePaginationReturn {
  const safeItemsPerPage = itemsPerPage > 0 ? itemsPerPage : 10;
  const totalPages = Math.ceil(totalItems / safeItemsPerPage);

  const clampPage = (page: number): number => {
    if (totalPages === 0) {
      return 1;
    }

    return Math.min(Math.max(page, 1), totalPages);
  };

  const [currentPageState, setCurrentPageState] = useState<number>(() =>
    Math.max(initialPage, 1),
  );

  const currentPage = clampPage(currentPageState);

  const startIndex =
    totalItems === 0 ? 0 : (currentPage - 1) * safeItemsPerPage;
  const endIndex =
    totalItems === 0
      ? 0
      : Math.min(startIndex + safeItemsPerPage - 1, totalItems - 1);

  const itemsOnCurrentPage = totalItems === 0 ? 0 : endIndex - startIndex + 1;

  const setPage = (pageNumber: number) => {
    setCurrentPageState(clampPage(pageNumber));
  };

  const nextPage = () => {
    setCurrentPageState((previousPage) => clampPage(previousPage + 1));
  };

  const prevPage = () => {
    setCurrentPageState((previousPage) => clampPage(previousPage - 1));
  };

  const canNextPage = totalPages > 0 && currentPage < totalPages;
  const canPrevPage = totalPages > 0 && currentPage > 1;

  return {
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
  };
}
