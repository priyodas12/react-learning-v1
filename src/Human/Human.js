import React from "react";

const human = () => {
  return (
    <div className="human">
      <h4>`Human Being with IQ Level {Math.floor(Math.random() * 80)}/100`</h4>
    </div>
  );
}

export default human;