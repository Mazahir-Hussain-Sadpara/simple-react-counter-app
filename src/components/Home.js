import React, { useState } from 'react';
import Counter from './Counter';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  return (
    <div>
      <h1>Simple Counter App</h1>
      <Counter count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
};

export default Home;
