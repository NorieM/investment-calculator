import React from "react";
import "./ResultTable.css";

const dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ResultTable = (props) => {
  console.log(props.data);

  const renderedResults = props.data.map((line) => (
    <tr key={line.year}>
      <td>{line.year}</td>
      <td>{dollarUS.format(line.savingsEndOfYear)}</td>
      <td>{dollarUS.format(line.yearlyInterest)}</td>
      {/* <td>{dollarUS.format()}</td>
      <td>{dollarUS.format()}</td> */}
    </tr>
  ));
  console.log(renderedResults);
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
