// increment
function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

// add comment
function addComment(postId, author, comment) {
  console.log("Dispatching add comment");
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
}
// remove comment
function removeComment(postId, index) {
  return {
    type: "REMOVE_COMMENT",
    index,
    postId
  };
}

export { increment, addComment, removeComment };
