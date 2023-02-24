import React from "react";

export default function CompanyItem({ company }) {
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
    <div className="CompanyItem">
      {companyRows.map((item, i) => {
        return (
          <p className="CompanyValueP" key={i}>
            {company[item]}
          </p>
        );
      })}
    </div>
  );
}
