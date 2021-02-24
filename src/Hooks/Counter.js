import React, { useState } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  console.log(setCount);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={incrementCount}>{count}</button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}
