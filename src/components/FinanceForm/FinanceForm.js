import React from "react";
import { useState } from "react";
import classes from "./FinanceForm.module.css";

const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 5,
    duration: 15,
  }

const FinanceForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  // handle click of reset button - i.e. clear form
  const handleReset = (event) => {
    setUserInput(initialUserInput);
  };

  // handle change in form inputs
  const handleChange = (input, value) => {
    setUserInput((prev) => ({ ...prev, [input]: +value }));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={userInput['current-savings']}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={userInput['yearly-contribution']}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={userInput['expected-return']}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            value={userInput['duration']}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FinanceForm;
