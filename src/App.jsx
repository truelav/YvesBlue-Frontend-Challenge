import { useState } from "react";

import data from "./data/data.json";

import "./App.css";
import CompanyList from "./components/CompanyList";
import TableTitles from "./components/TableTitles";
import PaginationComp from "./components/PaginationComp";

function App() {
  const [companiesData, setcompaniesData] = useState(data);
  const [curCompaniesOnPage, setCurCompaniesOnPage] = useState(
    data.slice(0, 9)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (curPage) => {
    setCurrentPage(curPage);
    const sliceStart = (curPage - 1) * 10;
    const sliceEnd = curPage * 10 - 1;
    setCurCompaniesOnPage(companiesData.slice(sliceStart, sliceEnd));
  };

  const handleSort = (sortBy) => {
    //we need to handle different based on the field
    //some have $ sign the others are not integers and third are letters
    let newSortedCompanies = [];
    //
    if (sortBy === "Company Name") {
      newSortedCompanies = [...curCompaniesOnPage].sort((a, b) =>
        a[`${sortBy}`].localeCompare(b[`${sortBy}`])
      );
    } else if (sortBy === "Total Revenue" || sortBy === "Company Market Cap") {
      newSortedCompanies = [...curCompaniesOnPage].sort(
        (a, b) =>
          parseInt(b[`${sortBy}`].substring(1), 10) -
          parseInt(a[`${sortBy}`].substring(1), 10)
      );
    } else {
      newSortedCompanies = [...curCompaniesOnPage].sort(
        (a, b) => parseInt(b[`${sortBy}`], 10) - parseInt(a[`${sortBy}`], 10)
      );
    }

    setCurCompaniesOnPage(newSortedCompanies);
  };

  return (
    <div className="App">
      <TableTitles handleSort={handleSort} />
      <CompanyList companiesData={curCompaniesOnPage} />
      <PaginationComp
        currentPage={currentPage}
        currentNumOfCompanies={companiesData.length}
        handleChangePage={handleChangePage}
      />
    </div>
  );
}

export default App;
