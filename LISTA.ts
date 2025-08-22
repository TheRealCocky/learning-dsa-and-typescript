// Nó da lista
// @ts-ignore
class Node<T> {
    public value: T;
    // @ts-ignore
    public next: Node<T> | null;

    constructor(element: T) {
        this.value = element;
        this.next = null;
    }
}

// Lista ligada
class LinkedList<T> {
    // @ts-ignore
    private head: Node<T> | null;
    private counter: number;

    constructor() {
        this.head = null;
        this.counter = 0;
    }

    // Adicionar no final
    push(element: T): void {
        // @ts-ignore
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.counter++;
    }

    // Pegar nó numa posição
    // @ts-ignore
    getElementAt(position: number): Node<T> | null {
        if (position >= 0 && position < this.counter) {
            let node = this.head;
            for (let i = 0; i < position && node !== null; i++) {
                node = node.next;
            }
            return node;
        }
        return null;
    }

    // Remover nó numa posição
    // @ts-ignore
    deleteAt(position: number): Node<T> | null {
        if (position < 0 || position >= this.counter || this.head === null) {
            return null;
        }

        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            let previous = this.getElementAt(position - 1);
            if (previous && previous.next) {
                current = previous.next;
                previous.next = current.next;
            }
        }

        this.counter--;
        return current;
    }

    // Inserir numa posição específica
    insertAt(position: number, element: T): boolean {
        if (position < 0 || position > this.counter) {
            return false;
        }

        // @ts-ignore
        const node = new Node(element);

        if (position === 0) {
            // @ts-ignore
            node.next = this.head;
            this.head = node;
        } else {
            const previous = this.getElementAt(position - 1);
            if (previous) {
                // @ts-ignore
                node.next = previous.next;
                previous.next = node;
            }
        }

        this.counter++;
        return true;
    }

    // Converter para array
    toArray(): T[] {
        const arr: T[] = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

// ===============================
// Testando
const lista = new LinkedList<number>();
lista.push(10);
lista.push(20);
lista.push(30);
lista.push(40);
lista.push(50);

console.log("Lista inicial:", lista.toArray());

const pegar = lista.getElementAt(3);
console.log("Pegou:", pegar?.value);

const apagar = lista.deleteAt(4);
console.log("Apagou:", apagar?.value);

lista.insertAt(4, 99999);
console.log("Lista final:", lista.toArray());

