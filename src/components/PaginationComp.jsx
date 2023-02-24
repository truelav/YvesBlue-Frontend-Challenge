import React from "react";

import { getCountOfPages, getPagesArray } from "../utils/pagination";

export default function PaginationComp({
  currentPage,
  currentNumOfCompanies,
  handleChangePage,
  page,
}) {
  const pagesArray = getPagesArray(getCountOfPages(currentNumOfCompanies, 10));
  return (
    <div className="PaginationaComp">
      <button
        className="pageButton"
        disabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        PREV
      </button>
      {/* {pagesArray.map((page, i) => {
        return (
          <div
            onClick={() => handleChangePage(page)}
            className={currentPage === page ? "pageNum active" : "pageNum"}
            key={i}
          >
            {page}
          </div>
        );
      })} */}
      <div className="pageNum">
        <span>PAGE</span>
        {currentPage}
      </div>
      <button
        className="pageButton"
        disabled={currentPage === currentNumOfCompanies}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
