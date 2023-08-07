import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import FinanceForm from './components/FinanceForm/FinanceForm';
import ResultTable from './components/ResultTable/ResultTable';

function App() {

  const [userInput, setUserInput] = useState({});

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    console.log("Handle Calculate");
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <FinanceForm calculateHandler={calculateHandler}>

      </FinanceForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable>
        
      </ResultTable>
    </div>
  );
}

export default App;
