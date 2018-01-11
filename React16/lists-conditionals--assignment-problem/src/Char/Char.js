import React from "react";

const CharComponent = ({ character, clicked }) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  return (
    <span onClick={clicked} style={style}>
      {character}
    </span>
  );
};

export default CharComponent;
