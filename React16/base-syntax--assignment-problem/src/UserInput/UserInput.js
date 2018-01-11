import React from "react";

const UserInput = ({ change, currentName }) => (
  <input onChange={change} value={currentName} />
);

export default UserInput;
