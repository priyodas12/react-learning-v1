import React, { useState } from 'react'

function CounterTwoUS() {

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(previous => previous + 1)}>Increment Count</button>
      <button onClick={() => setCount(previous => {
        if (previous > 0) {
          return previous - 1
        } else {
          return initialCount
        }
      })}>Decrement Count</button>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  )
}

export default CounterTwoUS
