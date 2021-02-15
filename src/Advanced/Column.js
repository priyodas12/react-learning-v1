import React from 'react'

function Column() {
  const items = [{ id: 101, title: "abcd" }, { id: 102, title: "kbcd" }];
  return (
    <>
      {

        items.map(item => (
          <React.Fragment key={item.id}>
            <h1>Title:{item.id}</h1>
            <p>{item.title}</p>
          </React.Fragment>))

      }
    </>
  )
}

export default Column
