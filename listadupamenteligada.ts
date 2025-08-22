// @ts-ignore
class Node<T> {
    public value: T;
    // @ts-ignore
    public prev: Node<T> | null;
    // @ts-ignore
    public next: Node<T> | null;

    constructor(element: T) {
        this.value = element;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList<T> {
    // @ts-ignore
    private head: Node<T> | null;
    // @ts-ignore
    private tail: Node<T> | null;
    private counter: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.counter = 0;
    }

    push(element: T): void {
        // @ts-ignore
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            // @ts-ignore
            node.prev = this.tail;
            if (this.tail) this.tail.next = node;
            this.tail = node;
        }
        this.counter++;
    }

    // @ts-ignore
    getElementAt(position: number): Node<T> | null {
        if (position < 0 || position >= this.counter) return null;

        // @ts-ignore
        let current: Node<T> | null;
        if (position < this.counter / 2) {
            current = this.head;
            for (let i = 0; i < position; i++) {
                if (current) current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.counter - 1; i > position; i--) {
                if (current) current = current.prev;
            }
        }
        return current;
    }

    // @ts-ignore
    deleteAt(position: number): Node<T> | null {
        if (position < 0 || position >= this.counter) return null;

        // @ts-ignore
        let current: Node<T> | null = this.getElementAt(position);

        if (!current) return null;

        if (position === 0) {
            this.head = current.next;
            if (this.head) this.head.prev = null;
            if (position === this.counter - 1) this.tail = null;
        } else if (position === this.counter - 1) {
            this.tail = current.prev;
            if (this.tail) this.tail.next = null;
        } else {
            if (current.prev) current.prev.next = current.next;
            if (current.next) current.next.prev = current.prev;
        }

        this.counter--;
        return current;
    }

    insertAt(position: number, element: T): boolean {
        if (position < 0 || position > this.counter) return false;

        // @ts-ignore
        const node = new Node(element);

        if (position === 0) {
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                // @ts-ignore
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }
        } else if (position === this.counter) {
            // @ts-ignore
            node.prev = this.tail;
            if (this.tail) this.tail.next = node;
            this.tail = node;
        } else {
            const previous = this.getElementAt(position - 1);
            if (!previous) return false;

            const current = previous.next;
            // @ts-ignore
            node.next = current;
            // @ts-ignore
            node.prev = previous;

            previous.next = node;
            if (current) current.prev = node;
        }

        this.counter++;
        return true;
    }

    toArray(): T[] {
        const arr: T[] = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    toReverseArray(): T[] {
        const arr: T[] = [];
        let current = this.tail;
        while (current) {
            arr.push(current.value);
            current = current.prev;
        }
        return arr;
    }
}

// ===============================
// Testando
const lista = new DoublyLinkedList<number>();
lista.push(10);
lista.push(20);
lista.push(30);
lista.push(40);
lista.push(50);

console.log("Lista:", lista.toArray());
console.log("Pegou:", lista.getElementAt(2)?.value);
console.log("Apagou:", lista.deleteAt(3)?.value);
lista.insertAt(2, 999);
console.log("Lista final:", lista.toArray());
console.log("Lista invertida:", lista.toReverseArray());

