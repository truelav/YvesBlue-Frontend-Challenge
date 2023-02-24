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
      <button className="pageButton">PREV</button>
      {pagesArray.map((page, i) => {
        return (
          <div
            onClick={() => handleChangePage(page)}
            className={currentPage === page ? "pageNum active" : "pageNum"}
            key={i}
          >
            {page}
          </div>
        );
      })}
      <button className="pageButton">Next</button>
    </div>
  );
}
