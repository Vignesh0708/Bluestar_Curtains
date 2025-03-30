import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ totalPages = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange && onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md ${currentPage === 1 ? "bg-gray-300" : "bg-white border"} text-gray-500`}
      >
        <FiChevronLeft />
      </button>

      {/* Page Numbers */}
      {[1, 2, "...", totalPages - 1, totalPages].map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && goToPage(page)}
          className={`px-3 py-1 rounded-md border ${
            currentPage === page ? "border-purple-500 text-purple-500" : "text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md ${currentPage === totalPages ? "bg-gray-300" : "bg-white border"} text-gray-500`}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
