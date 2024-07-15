import React from "react";

export interface PaginateProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: ((newPage: number) => void) | undefined;
}

const MoviePagination: React.FC<PaginateProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const generatePageNumbers = (currentPage: number, totalPages: number) => {
    const pageNumbers: any = [1];
    if (totalPages > 1 && currentPage - 1 > 1) {
      if (currentPage - 1 !== 2) pageNumbers.push("...");
      pageNumbers.push(currentPage - 1);
    }

    if (totalPages !== 1 && currentPage !== 1) pageNumbers.push(currentPage);
    if (currentPage + 1 <= totalPages) {
      pageNumbers.push(currentPage + 1);
    }

    if (currentPage + 1 < totalPages) {
      if (currentPage + 1 !== totalPages - 1) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const handleClick = (pageNumber: number) => {
    if (pageNumber !== currentPage && onPageChange) {
      onPageChange(pageNumber);
    }
  };

  const renderedPageNumbers = (currentPage: number, totalPages: number) => {
    const pageNumbers = generatePageNumbers(currentPage, totalPages);
    return (
      <div className="flex items-center">
        {pageNumbers.map((numberOrEllipsis: any, index: number) => (
          <div key={index}>
            {typeof numberOrEllipsis === "number" ? (
              <button
                onClick={() => handleClick(numberOrEllipsis)}
                className={`px-3 py-2 text-lg font-semibold rounded-md mx-1 ${
                  numberOrEllipsis === currentPage
                    ? "bg-primary text-white"
                    : "bg-white text-primary hover:bg-gray-200"
                }`}
              >
                {numberOrEllipsis}
              </button>
            ) : (
              <span className="mx-1">{numberOrEllipsis}</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 text-lg font-semibold rounded-md mx-1 ${
          currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-blue-500 hover:bg-gray-200"
        }`}
      >
        &#60;
      </button>
      {renderedPageNumbers(currentPage, totalPages)}
      <button
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 text-lg font-semibold rounded-md mx-1 ${
          currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-blue-500 hover:bg-gray-200"
        }`}
      >
        &#62;
      </button>
    </div>
  );
};

export default MoviePagination;
