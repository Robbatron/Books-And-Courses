import React from "react";

const ValidationComponent = ({ textLength }) => {
  let validationMessage = "Text long enough";
  if (textLength < 5) validationMessage = "Text too short";

  return <p>{validationMessage}</p>;
};

export default ValidationComponent;
