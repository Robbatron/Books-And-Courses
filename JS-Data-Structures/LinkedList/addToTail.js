const { LinkedList, Node } = require('./LinkedList');

// ADD A NODE TO THE TAIL OF THE LL

// null: since this node will be added to the tail, we know that there will not be a nextNode in the LL
// this.tail: previous parameter

LinkedList.prototype.addToTail = function (value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode; // if LL is not empty... 
  else this.head = newNode; // if LL is empty, then set HEAD pointer equal to newNode (will be both HEAD and TAIL node)
  this.tail = newNode;
}

let myLL = new LinkedList();
myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);

console.log(myLL.tail.prev.prev); // will go all the way back to 10