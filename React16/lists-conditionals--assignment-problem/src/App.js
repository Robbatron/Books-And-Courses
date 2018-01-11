import React, { Component } from "react";
import "./App.css";
import Instructions from "./Instructions/Instructions";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    text: ""
  };

  textLengthHandler = event => {
    this.setState({
      id: "a",
      text: event.target.value,
      length: event.target.value.length
    });
  };

  deleteCharHandler = index => {
    const text = this.state.text.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ text: updatedText });
  };

  render() {
    const charList = this.state.text.split("").map((txt, i) => {
      return (
        <Char
          character={txt}
          key={i}
          clicked={() => this.deleteCharHandler(i)}
        />
      );
    });

    return (
      <div className="App">
        <Instructions />
        <input
          type="text"
          onChange={this.textLengthHandler}
          value={this.state.text}
        />
        <Validation textLength={this.state.text.length} />
        {charList}
      </div>
    );
  }
}

export default App;
