import React, { Component } from "react";
import { Link } from "react-router";

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* A way to write "{this.props.children}" while also passing props */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
