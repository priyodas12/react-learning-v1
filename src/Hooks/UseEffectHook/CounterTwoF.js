import React, { useState, useEffect } from 'react'

function CounterTwoF() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect');
    document.title = `clicked ${count} time`;
  }, [count]);

  return (
    <div>

      <p id="p2">Name:{name}</p>
      <input value={name} onChange={e => setName(e.target.value)}></input>
      <p id="p1">Count:{count}</p>
      <button onClick={() => setCount(previous => previous + 1)}>Increment</button>
    </div>
  )
}

export default CounterTwoF
