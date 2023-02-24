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
  const [sortedCompanies, setSortedCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (curPage) => {
    setCurrentPage(curPage);
    const sliceStart = (curPage - 1) * 10;
    const sliceEnd = curPage * 10 - 1;
    const newCompanies = setCurCompaniesOnPage(
      companiesData.slice(sliceStart, sliceEnd)
    );
  };

  const handleSort = (sortBy) => {
    //we need to handle different based on the field
    //some have $ sign the others are not integers and third are letters

    console.log(sortBy, curCompaniesOnPage);
    const newSortedCompanies = [...curCompaniesOnPage].sort(
      (a, b) => parseInt(a[`${sortBy}`], 10) - parseInt(b[`${sortBy}`], 10)
    );
    console.log(newSortedCompanies);
    setCurCompaniesOnPage(newSortedCompanies);

    // curCompaniesOnPage.forEach((a) => console.log(a[`${sortBy}`]));
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
