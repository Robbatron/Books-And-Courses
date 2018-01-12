import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const Persons = props =>
  props.persons.map((person, index) => (
    // Only use error boundaries when you know
    // you're code might fail and you can't help it
    <ErrorBoundary key={person.id}>
      <Person
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={event => props.changed(event, person.id)}
      >
        {person.childText}
      </Person>
    </ErrorBoundary>
  ));

export default Persons;
