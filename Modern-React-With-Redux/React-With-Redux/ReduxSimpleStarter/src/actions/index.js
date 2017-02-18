export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    // actions usually have two values: type and payload
    // every action must have a type that describes the purpose of the action
    type: 'BOOK_SELECTED',
    // the payload further describes the conditions of the action thats being triggered
    payload: book
  }
}
