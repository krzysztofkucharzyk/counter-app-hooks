import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const [sum, setSum] = useState(0);

  const inc = () => {
    setCount(prevCount => prevCount + 1);
  }

  const dec = () => {
    setCount(prevCount => prevCount - 1);
  }

  const stepChange = (event) => {
    setStep(event.target.value);
  }

  const add = () => {
    setSum(prevCount => prevCount += +step);
  }

  // const changeValue = (action) => {
  //   setSum((prevCount) => {
  //     if(action === 'add') {
  //       prevCount += +step;
  //     } else {
  //       prevCount = sum;
  //     }
  //   }
  // )}

  return (
    <div className="App">
      <h1 className={count > 0 ? 'plus' : count < 0 ? 'minus' : null}>{count}</h1>
        <div className="counter-panel">
          <button onClick={dec}>-</button>
          <button onClick={inc}>+</button>
        </div>
        <div className="step">
          <h1 className={sum > 0 ? 'plus' : sum < 0 ? 'minus' : null}>{sum}</h1>
          {/* STEP: <input type="number" value={step} onChange={event => setStep(event.target.value)}/> */}
          STEP: <input type="number" value={step} onChange={stepChange}/>
          <button onClick={add}>Add {step}</button>
          {/* <button onClick={() => changeValue('add')}>Add {step}</button>
          <button onClick={() => changeValue('init')}>Initial value</button> */}
        </div>
    </div>
  );
}

export default App;
