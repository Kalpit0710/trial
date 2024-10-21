import React, { useState, useEffect } from 'react';

const MessageLogger = ({ propValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component re-rendered due to propValue or count change.');
  }, [propValue, count]);

  return (
    <div>
      <h2>Prop Value: {propValue}</h2>
      <h2>State Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      
    </div>
  );
};

export default MessageLogger;
