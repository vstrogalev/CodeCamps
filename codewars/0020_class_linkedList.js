// Swap Node Pairs In Linked List
/*
You are given the head node of a singly-linked list. Write a method that swaps each pair of nodes in the list, then returns the head node of the list. You have to swap the nodes themselves, not their values.

Example:

(A --> B --> C --> D) => (B --> A --> D --> C)

The swapping should be done left to right, so if the list has an odd length, the last node stays in place:

(A --> B --> C) => (B --> A --> C)
*/
function swapPairs(head) {
  function swap(n1, n2, prevNode) {
    if (n1.next !== n2 || !n2) {
      return null
    };

    const n = n2.next;
    n2.next = n1;
    n1.next = n;
    if (!prevNode.node) prevNode.node = n1
    else prevNode.node
    return prevNode
  }

// 0 - 1 - 2 - 3 - 4 - 5 - 6

// 1 - 0 - 2 - 3 - 4 - 5 - 6

// 1 - 0 - 3 - 2 - 4 - 5 - 6

  if (head === null || head === null || head.next === null) return head

  let n1 = head;
  let n2;
  head = head.next;
  let prevNode = {node: null};
  do {
    n2 = n1.next;
    prevNode = swap(n1, n2, prevNode)

    n1 = n1.next;
    if (n1=== null) return head
  } while(n1);

  return head;
}

class Node {
  constructor(value, next = null) {
      this.value = value;
      this.next = next;
  }
}

const l7 = new Node('6')
const l6 = new Node('5', l7)
const l5 = new Node('4', l6)
const l4 = new Node('3', l5)
const l3 = new Node('2', l4)
const l2 = new Node('1', l3)
const l1 = new Node('0', l2) // head

let node = l1;
do {
  console.log(node.value);
  node = node.next;
} while (node)

const newHead = swapPairs(l1);
console.log(newHead)
node = newHead;

do {
  console.log(node.value)
  node = node.next;
} while (node)