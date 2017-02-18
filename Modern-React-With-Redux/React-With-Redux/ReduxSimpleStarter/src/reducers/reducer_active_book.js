// state arg is not app state, only the state this reducer is responsible for
// reducers are only called when an action occurs
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
