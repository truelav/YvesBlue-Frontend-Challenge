import React from "react";
import CompanyItem from "./CompanyItem";

export default function CompanyList({ companiesData }) {
  return (
    <div className="CompanyList">
      {companiesData.map((company, i) => {
        return <CompanyItem key={i} company={company} />;
      })}
    </div>
  );
}
