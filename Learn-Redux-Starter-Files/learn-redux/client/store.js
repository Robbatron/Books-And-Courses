import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import the root reducer
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

// create an object for the default data
const defaultState = {
  posts,
  comments
};

// for redux dev tools extension and other possible "enhancers"
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
  // f => f is just returning the store itself
);

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

// for HMR of reducers, not required
if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
