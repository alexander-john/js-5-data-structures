let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date");
console.log(fruits);
console.log(fruits[1]);

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

class HashTable {
    constructor(size = 42) {
        this.bucket = new Array(size);
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];
        }
    }
}