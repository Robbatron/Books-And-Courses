import React from "react";
import classes from "./Cockpit.css";
import Persons from "../Persons/Persons";

const Cockpit = props => {
  const style = {
    backgroundColor: "green",
    textAlign: "center",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "salmon",
      color: "black"
    }
  };

  let assignedClasses = [];
  let btnClass = "";

  let persons = null;

  if (props.showPersons) {
    persons = (
      <Persons
        persons={props.showPersons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    );
    style[":hover"] = {
      backgroundColor: "lightgreen",
      color: "black"
    };
  }

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  props.persons.length <= 2 && assignedClasses.push(classes.red);
  props.persons.length <= 1 && assignedClasses.push(classes.bold);

  return (
    <div>
      <h1>Test App</h1>
      <p style={assignedClasses.join(" ")}>This is really working!</p>
      <button onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default Cockpit;
