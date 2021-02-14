import React from "react";
import './human.css';

const human = (props) => {
  return (
    <div className="Human">
      <h4 onClick={props.click}>
        {props.name} with IQ Level {Math.floor(Math.random() * props.age)}/100, {props.exp}
      </h4>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
}

export default human;