import React, { useState, useEffect } from 'react';
import './App.css';
import ClockFunc from "./ClockFunc";

function App() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const [sum, setSum] = useState(0);
  const [showClock, setShowClock] = useState(true);

  // console.log(step);
  // console.log(sum);

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

  const init = () => {
    setSum(0);
  }

  // console.log(step);
  // console.log(sum);

  // const changeValue = (action) => {
  //   setSum((prevCount) => {
  //     if(action === 'add') {
  //       prevCount += +step;
  //     } else {
  //       prevCount = sum;
  //     }
  //   }
  // )}

  const toggleClock = () => {
    setShowClock((prevState) => {
      return({
        showClock: !prevState.showClock
      });
    })
  } 

  let clockElem = '';

  if (showClock === true) {
    clockElem = <ClockFunc toggleClockM={toggleClock} />;
} else {
    clockElem = <span className="show" onClick={toggleClock}>show</span>;
}
  
  


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
          <button onClick={init}>Initial value</button>
          {/* <button onClick={() => changeValue('add')}>Add {step}</button>
          <button onClick={() => changeValue('init')}>Initial value</button> */}
          {clockElem}
        </div>
    </div>
  );
}

export default App;
