import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Compteur</h1>
      <button onClick={decrementCounter}>-</button>
      <span>{count}</span>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
};

export default App;