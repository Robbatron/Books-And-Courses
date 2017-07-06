const { LinkedList, Node } = require('./LinkedList');

// ADD A NODE TO THE HEAD OF THE LL
LinkedList.prototype.addToHead = function (value) {
  // this.head: refers to the old HEAD of the LL that we want to replace
  // prev: null, because no nodes come before the HEAD node
  let newNode = new Node(value, this.head, null);
  // - if it isn't empty, we need to make sure we connect our new HEAD node to all of the other nodes correctly - we will do this by making sure the PREVIOUS and NEXT pointers of the old and new HEAD node are pointing where they should be pointing
  if (this.head) this.head.prev = newNode; // if it already has HEAD, set PREV to newNode
  // - if the LL is empty, then adding to the head is as simple as creating a new node and pointing the HEAD and TAIL pointers both at this new node.
  else this.tail = newNode; // if the LL is empty, set it to newNode (HEAD & TAIL node)
  this.head = newNode; // whether the previous list was empty or not, we want newNode to be the HEAD of the list
}

let ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);

console.log(ll);