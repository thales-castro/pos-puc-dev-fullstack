// Linked List
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.count = 0;
        this.header = null;
        this.tail = null;
    }

    add(element) {
        if (this.count == 0) {
            this.header = this.tail = element;
        } else {
            this.tail.next = element;
            this.tail = element;
        }
        this.count++;
    }

    print() {
        var aux = this.header;
        while (aux != null) {
            console.log(aux.element);
            aux = aux.next;
        }
    }
}

// Code execution:
// New node allocation.
// Information assignment to new allocated node.
// Inserting new node in the linked list linked to existent new nodes.

var linkedList = new LinkedList();

linkedList.add(new Node(1));
linkedList.print();

linkedList.add(new Node(2));
linkedList.print();

linkedList.add(new Node(3));
linkedList.print();

linkedList.add(new Node(4));
linkedList.print();