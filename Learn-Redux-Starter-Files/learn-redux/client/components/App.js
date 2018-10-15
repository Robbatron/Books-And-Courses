import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
  // these two functions take the state and dispatchers (action creators) and surface their data/functions via props
  mapStateToProps,
  mapDispatchToProps
)(Main); // take our main component and add all data as props

export default App;
