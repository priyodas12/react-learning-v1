import React, { useState } from 'react'

function CounterFourUsArr() {

  const [nums, setNums] = useState([]);

  function addNums() {
    setNums([...nums, {
      id: nums.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }

  return (
    <div>
      <button onClick={addNums}>Add Numbers</button>
      <ul>
        {
          nums.map(num => (
            <li key={num.id}>{num.value}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CounterFourUsArr
