import React, { useState } from "react";

export const Calculator = () => {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [operator, setOperator] = useState();
  const [result, setResult] = useState();

  const printOutput = () => {
    let output = var1;
    if (operator) output += " " + operator + " ";
    if (var2 && operator) output += var2;
    if (var2 && operator && result) output += " = " + result;
    return output;
  };

  const takeInput = (numb) => {
    if (operator) {
      setVar2(var2 * 10 + numb);
    } else {
      setVar1(var1 * 10 + numb);
    }
  };

  const doCalculation = () => {
    if (!result) {
      if (operator === "+") setResult(var1 + var2);
      if (operator === "-") setResult(var1 - var2);
      if (operator === "*") setResult(var1 * var2);
      if (operator === "/") setResult(var1 / var2);
    }
  };

  const clearCalculator = () => {
    setVar1(0);
    setVar2();
    setOperator();
    setResult();
  };

  return (
    <div>
      <h2>Output: {printOutput()}</h2>
      <button onClick={() => takeInput(7)}>7</button>
      <button onClick={() => takeInput(8)}>8</button>
      <button onClick={() => takeInput(9)}>9</button>
      <button onClick={() => setOperator("+")}>+</button> <br />
      <button onClick={() => takeInput(4)}>4</button>
      <button onClick={() => takeInput(5)}>5</button>
      <button onClick={() => takeInput(6)}>6</button>
      <button onClick={() => setOperator("-")}>-</button> <br />
      <button onClick={() => takeInput(1)}>1</button>
      <button onClick={() => takeInput(2)}>2</button>
      <button onClick={() => takeInput(3)}>3</button>
      <button onClick={() => setOperator("*")}>*</button> <br />
      <button onClick={() => takeInput(0)}>0</button>
      <button onClick={() => doCalculation()}>=</button>
      <button onClick={() => setOperator("/")}>/</button>
      <button onClick={() => clearCalculator()}>MC</button>
    </div>
  );
};
