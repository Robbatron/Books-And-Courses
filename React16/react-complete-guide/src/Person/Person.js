import React from "react";
import "./Person.css";

// A component is just a function that returns jsx
const Person = ({ name, age, children, click, changed }) => {
  return (
    <div className="Person">
      <p onClick={click}>
        I'm {name} and I am {age} years old!
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Person;
