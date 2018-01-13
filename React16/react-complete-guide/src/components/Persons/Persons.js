import React from "react";
import Person from "./Person/Person";

const Persons = props =>
  props.persons.map((person, index) => (
    <Person
      name={person.name}
      age={person.age}
      key={person.id}
      click={() => props.clicked(index)}
      changed={event => props.changed(event, person.id)}
    >
      {person.childText}
    </Person>
  ));

export default Persons;
