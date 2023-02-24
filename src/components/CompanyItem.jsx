import React from "react";
import ScoreChartComp from "./ScoreChartComp";

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
        const isESGScore = item == "ESG Score";
        return (
          <>
            {isESGScore ? (
              <div className="charContainer">
                <p className="CompanyValueP" key={i}>
                  {" "}
                  {company[item]}{" "}
                </p>
                <ScoreChartComp val={parseInt(company[item], 10)} />
              </div>
            ) : (
              <p className="CompanyValueP" key={i}>
                {" "}
                {company[item]}{" "}
              </p>
            )}
          </>
        );
      })}
    </div>
  );
}
