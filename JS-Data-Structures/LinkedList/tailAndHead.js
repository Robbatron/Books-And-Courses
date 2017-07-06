const { LinkedList, Node } = require('./LinkedList');
const { addToTail } = require('./addToTail');
const { addToHead } = require('./addToHead');

let fullLL = new LinkedList();

// can we use them both together?
fullLL.addToTail(10);
fullLL.addToTail(20);
fullLL.addToTail(30);
fullLL.addToHead(100);

// log out node that we added to head
console.log(fullLL.tail.prev.prev.prev);