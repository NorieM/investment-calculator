import React from 'react'
import './ResultTable.css'
    
const ResultTable = (props) => {
  console.log(props.data);

  const renderedResults = props.data.map((line) => 
     <tr><td>{line.year}</td></tr>
  )
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
    <tbody>

        {renderedResults}
    </tbody>
  </table>
  )
}

export default ResultTable;