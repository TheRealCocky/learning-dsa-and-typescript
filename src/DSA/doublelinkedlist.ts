//@ts-ignore
class Node<T>{
    value:T;
    // @ts-ignore
    prev:Node<T>| null;
    // @ts-ignore
    next:Node<T>|null;
    constructor(element:T) {
        this.value=element;
        this.prev=null;
        this.next=null;
    }
}
// @ts-ignore
class DoublyLinkedList<T>{
    // @ts-ignore
    head:Node<T>|null;
    // @ts-ignore
    tail:Node<T>|null;
    counter:number;

    constructor() {
        this.head=null;
        this.tail=null;
        this.counter=0;
    }

    push(element:T):void{
        // @ts-ignore
        const node= new Node(element);
        if(this.head==null){
            this.head=node;
            this.tail=node;
        }else{
            // @ts-ignore
            node.prev=this.tail;
            this.tail!.next=node;
            this.tail=node;
        }
        this.counter++;
    }

    // @ts-ignore
    GetElementAt(position:number):Node<T> | null{
        if(position<0 || position>=this.counter){
            return null
        }

        // @ts-ignore
        let current:Node<T>|null;
        let index:number;

        if(position < this.counter/2){
            index=0;
            current=this.head;
            while(index < position){
                current=current!.next;
                index++;
            }
        }else{
            index=this.counter-1;
            current=this.tail;
            while(index > position){
                current=current!.prev;
                index--;
            }
        }
        return current;
    }

    // @ts-ignore
    DeleteAt(position:number):Node<T>| null{
        if(position<0 || position >= this.counter){
            return null;
        }
        // @ts-ignore
        let current:Node<T> | null= this.GetElementAt(position)
        if(!current) return null;

        if(position===0){
            this.head=current.next;
            if(this.head) this.head.prev=null;
            if(position===this.counter-1)this.tail=null;
        }
        else if(position===this.counter-1){
            this.tail=current.prev;
            if(this.tail)this.tail.next=null;

        }else{
            if(current.prev) current.prev.next=current.next;
            if(current.next) current.next.prev=current.prev;
        }

        this.counter--;
        return current;
    }

    // @ts-ignore
    InsertAt(position:number,element:T):boolean{
        if(position<0 || position > this.counter){
            return false;
        }
        // @ts-ignore
        const node= new Node(element);
        if(position===0){
            if(!this.head){
                this.head=node;
                this.tail=node;
            }else{
                // @ts-ignore
                node.next=this.head;
                this.head.prev=node;
                this.head=node;
            }
        }
        else if(position===this.counter){
            // @ts-ignore
            node.prev=this.tail;
            this.tail!.next=node;
            this.tail=node;
        }
        else{
            let previous= this.GetElementAt(position-1);
            if(!previous) return false;

            const current=previous.next;

            // @ts-ignore
            node.next=current;
            // @ts-ignore
            node.prev=previous;

            previous.next=node;
            if(current) current.prev=node;
        }
        this.counter++;
        return true;
    }

    // @ts-ignore
    toArray(): T[] {
        const arr: T[] = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    // @ts-ignore
    toReverseArray():T[]{
        const arr:T[]=[];
        let current=this.tail;
        while(current !== null){
            arr.push(current.value);
            current=current.prev;
        }
        return arr;
    }
}
const lista1 = new DoublyLinkedList<number>();
lista1.push(10);
lista1.push(20);
lista1.push(30);
lista1.push(40);
lista1.push(50);

console.log("Lista:", lista1.toArray());
console.log("Pegou:", lista1.GetElementAt(2)?.value);
console.log("Apagou:", lista1.DeleteAt(3)?.value);
console.log("Lista final:", lista1.toArray());
console.log("Lista invertida:", lista1.toReverseArray());
