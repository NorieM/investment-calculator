import React from "react";
import "./ResultTable.css";

const dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits:2,
  maximumFractionDigits:2
});

const ResultTable = (props) => {
  const renderedResults = props.data.map((yearData) => (
    <tr key={yearData.year}>
      <td>{yearData.year}</td>
      <td>{dollarUS.format(yearData.savingsEndOfYear)}</td>
      <td>{dollarUS.format(yearData.yearlyInterest)}</td>
      <td>
        {dollarUS.format(
          yearData.savingsEndOfYear -
            props.initialInvestment -
            yearData.yearlyContribution * yearData.year
        )}
      </td>
      <td>
        {dollarUS.format(
          props.initialInvestment + yearData.yearlyContribution * yearData.year
        )}
      </td>
    </tr>
  ));

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{renderedResults}</tbody>
    </table>
  );
};

export default ResultTable;
