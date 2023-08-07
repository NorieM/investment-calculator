import React from 'react'
import './FinanceForm.css'

const FinanceForm = (props) => {

  const userInput = {
    'current-savings':1000,
    'yearly-contribution':1000,
    'expected-return': 100,
    'duration':10,
  }

  const submitForm = (event) => {
    event.preventDefault();
    props.calculateHandler(userInput);
  }

  return (
    <form className="form" onSubmit={submitForm}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  )
}

export default FinanceForm;