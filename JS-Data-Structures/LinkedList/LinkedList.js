function LinkedList() {
  // when we create a LL, there will not be any nodes yet
  // therefore, we will not pass them in as args, but rather set them to null
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

module.exports = { LinkedList, Node }