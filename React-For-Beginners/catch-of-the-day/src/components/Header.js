import React from 'react';

// This component only render's out some HTML to the DOM, so we don't need a full react component
// If you don't need other methods other than render, we can just create a stateless functional component
const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        { /* Normally we would need this.props.tagline, but with the arrow function,
          "this" doesn't mean anything, so we can remove it. */}
        <span>{props.tagline}</span>
      </h3>
    </header>
  )
}

export default Header;
