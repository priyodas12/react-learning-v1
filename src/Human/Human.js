import React from "react";

const human = (props) => {
  return (
    <div className="human">
      <h4 onClick={props.click}>
        '{props.name} with IQ Level {Math.floor(Math.random() * props.age)}/100, {props.exp}`
      </h4>
      <p>{props.children}</p>
    </div>
  );
}

export default human;