import React from "react";

const Circle = ({ colors, rotation }) => {
  let circleStyles = {
    background: `conic-gradient(${colors[0]}, ${colors[1]}, ${colors[2]})`,
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    // transform: `rotate(${rotation}deg)`,
    animation: `${rotation} 6s linear infinite`,
  };

  return <div style={circleStyles}></div>;
};

export default Circle;
