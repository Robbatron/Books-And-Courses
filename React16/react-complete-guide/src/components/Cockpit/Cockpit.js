import React from "react";
import classes from "./Cockpit.css";
import Persons from "../Persons/Persons";

const Cockpit = props => {
  //eslint-disable-next-line
  let persons = null;
  let assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    persons = (
      <Persons
        persons={props.showPersons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    );
  }

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  props.persons.length <= 2 && assignedClasses.push(classes.red);
  props.persons.length <= 1 && assignedClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
