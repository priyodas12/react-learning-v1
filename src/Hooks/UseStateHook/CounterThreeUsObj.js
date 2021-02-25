import React, { useState } from 'react'

function CounterThreeUsObj() {

  const initPerson = { id: 1, "name": "abcd" };

  const [person, setPerson] = useState(initPerson);

  return (
    <div>
      <form>
        <h4>ID:{person.id}</h4>
        <input type="number" value={person.id} onChange={(e) => setPerson({ ...person, id: e.target.value })}></input>
        <h4>Name:{person.name}</h4>
        <input type="text" value={person.name} onChange={(e) => setPerson({ ...person, name: e.target.value })}></input>
      </form>
    </div>
  )
}

export default CounterThreeUsObj
