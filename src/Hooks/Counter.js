import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  console.log(typeof setCount);

  useEffect(() => {
    // hadling side effects like this
    document.title = `You Clicked ${count} times`;
  });

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      {/*<button onClick={incrementCount}>{count}</button>*/}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}
