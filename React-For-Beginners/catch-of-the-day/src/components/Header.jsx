import React from "react";

// stateless functional component
const Header = ({ tagline, cool }) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      {!cool ? <span>{tagline}</span> : <span>Robbie is Cool</span>}
    </h3>
  </header>
);

export default Header;
