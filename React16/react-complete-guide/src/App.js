import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Robbie", age: 25, childText: "child text" },
      { id: "vasd1", name: "Mandy", age: 26 },
      { id: "qwrqe", name: "Daedra", age: 6 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] }; // don't mutate
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    // simply flip showPersons to what it is not. smart.
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={event => this.nameChangedHandler(event, person.id)}
            >
              {person.childText}
            </Person>
          ))}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    this.state.persons.length <= 2 && classes.push("red");
    this.state.persons.length <= 1 && classes.push("bold");

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
