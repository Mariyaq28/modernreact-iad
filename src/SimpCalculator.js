// SimpCalculator.js
import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function SimpCalculator() {   
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <h1 className="calculator-heading">Modern React Calculator</h1>

      <div className="calculator-display">
        <input type="text" value={input} readOnly />
      </div>

      <div className="calculator-buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default SimpCalculator;
