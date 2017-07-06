## What is a Linked List?

* A linked list is a list of elements (called nodes) that are connected or "linked" together in a single-file line.

## There are two types of Linked Lists

* Singly-linked list
  - Each node only has reference to the node after it
* Doubly-linked list
  - Each node has referenced to the next and previous node

* The linked list itself only needs to know about two nodes to function correctly
  - Head Node
  - Tail Node
    ~ it keeps a reference to these nodes with a *Head Pointer* and a *Tail Pointer*

## We want to perform some operations on our LL so that we can add data to it and retrieve data out of it.
* We will be adding a node to the HEAD of the LL
* We will be adding a node to the TAIL of the LL
* Removing the HEAD
* Removing the TAIL

#### The head and tail pointers change which node they are pointing to as nodes are added and removed. They never use reference to what the HEAD and TAIL of the LL is.

#### All of the nodes that we will be creating will be represented as JS objects.
  * An example node would look like ... { value: 7, next: nextNode, prev: prevNode }