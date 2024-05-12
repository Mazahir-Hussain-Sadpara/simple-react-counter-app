import React from 'react';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement} disabled={count === 0}>Decrement</button>
    </div>
  );
};

export default Counter;
