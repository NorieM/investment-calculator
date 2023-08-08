import React from "react";
import { useState } from "react";
import "./FinanceForm.css";

const FinanceForm = (props) => {

  const [userInput, setUserInput] = useState({});

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    props.calculateData(userInput);
  };

  // handle click of reset button - i.e. clear form
  const handleReset = (event) => {
    console.log("Reset");
  };

  // handle change in form inputs
  const handleChange = (input, value) => {
    console.log(input);
    console.log(value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FinanceForm;
