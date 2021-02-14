import React from "react";

const human = (props) => {
  return (
    <div className="human">
      <h4>'{props.name} with IQ Level {Math.floor(Math.random() * props.age)}/100`</h4>
      <p>{props.children}</p>
    </div>
  );
}

export default human;