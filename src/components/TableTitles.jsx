import React from "react";

export default function TableTitles({ handleSort }) {
  const companyRows = [
    "Company Name",
    "Total Revenue",
    "Company Market Cap",
    "Women Employees",
    "Women Managers",
    "CO2 Scope 1 & 2 Adjusted",
    "CO2 Scope 1 & 2 Revenue Adjusted",
    "ESG Score",
  ];

  return (
    <>
      <h2>
        <b>Impact Assessment Data</b>
      </h2>
      <div className="CompanyItem">
        {companyRows.map((item, i) => {
          return (
            <p
              onClick={() => handleSort(item)}
              className="CompanyValueP"
              key={i}
            >
              <b>{item}</b>
            </p>
          );
        })}
      </div>
    </>
  );
}
