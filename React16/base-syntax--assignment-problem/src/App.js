import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = { username: "robbie" };

  changeHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <UserInput change={this.changeHandler} currentName={username} />
        <UserOutput username={username || "robbie"} />
      </div>
    );
  }
}

export default App;
