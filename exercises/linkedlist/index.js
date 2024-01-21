// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

    getData() {
        return this.data;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(data);
    }

    insertAt(data, idx) {
        if (idx < 0) {
            return;
        }
        if (idx === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current = this.head;
        let previous;
        let count = 0;
        while (current && count < idx) {
            previous = current;
            current = current.next;
            count++;
        }
        node.next = current;
        previous.next = node;
    }

    size() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    getAt(idx) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === idx) {
                return current;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        let previous = this.head;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    removeAt(idx) {
        if (!this.head) {
            return;
        }
        if (idx === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(idx - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    forEach(fn) {
        let current = this.head;
        while (current) {
            fn(current);
            current = current.next;
        }
    }

    // Linked list should be compatible as the subject of a 'for...of' loop
    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    const done = false;
                    const value = current;
                    current = current.next;
                    return { done, value };
                }
                return { done: true };
            },
        };
    }
}

module.exports = { Node, LinkedList };
