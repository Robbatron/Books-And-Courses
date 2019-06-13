import React from "react";
import { Link, Route } from "react-router-dom";

function Topic(props) {
  return <h3>{props.match.params.topicId}</h3>;
}

export default function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
        </li>
      </ul>
      <hr />
      <Route path={`${match.path}/:topicId`} component={Topic} />
      {/* Q. Okay, but how do I pass props to these components? */}
      {/* A. Render props! */}
      {/* <Route
        path={`${match.path}/:topicId`}
        render={props => <Topic {...props} name="Robbie" />}
      /> */}
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic</h3>}
      />
    </div>
  );
}
