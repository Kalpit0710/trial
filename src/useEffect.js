import React, { useState, useEffect } from 'react';

export default function MyComponent() {
  const [count, setCounter] = useState(0);
  const [data, setData] = useState('Ram');

  useEffect(() => {
    console.log('Data updated:', data);
  }, [data]);

  function updateCount() {
    setCounter(count + 1);
  }

  function updateData() {
    setData('Seeta');
  }

  return (
    <div>
      <h1>Button Clicked {count} times</h1>
      <button onClick={updateCount}>Click</button>

      <h2>Data: {data}</h2>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}
