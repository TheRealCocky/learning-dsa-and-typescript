// @ts-ignore
class Node<T>{
    value:T;
    // @ts-ignore
    prev:Node<T>;
    // @ts-ignore
    next:Node<T>;

    constructor(element:T) {
        this.value=element;
        this.prev=null;
        this.next=null;
    }
}

class DoubleLinkedList<T>{
    // @ts-ignore
    head:Node<T>;
    // @ts-ignore
    tail:Node<T>;
    counter:number;

    constructor() {
        this.head=null;
        this.tail=null;
        this.counter=0;
    }

    push(element:T){
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
    GetElementAt(position:number):Node<T>{
        if(position <0 || position >= this.counter){
            return null;
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

    DeleteAt(position:T){
        // @ts-ignore
        if(position < 0 || position >= this.counter){
            return null;
        }
        // @ts-ignore
        let current:Node<T>| null=this.GetElementAt(position);
        if(!current)return null;
        if(position===0){
            this.head=current.next;
            if(this.head)this.head.prev=null;
            if(position===this.counter-1)this.tail=null;
        }else if(position===this.counter-1){
            this.tail=current.prev;
            if(this.tail) this.tail.next=null;
        }
        else{

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
        let node= new Node(element);
        // @ts-ignore
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
            let previous=this.GetElementAt(position-1);
            if(!previous) return false;
            // @ts-ignore
            let current=previous.next;
            // @ts-ignore
            node.next=previous;
            // @ts-ignore
            node.prev=current;

            previous.next=node;
            if(!current) current.prev=node;
        }
        this.counter++;
        return true;
    }
    // @ts-ignore
    toArray():Array<T>{
        let arr:T[]=[];
        let currrent= this.head;
        while(currrent !== null){
            arr.push(currrent.value);
            currrent=currrent.next;
        }
        return arr;
    }
    // @ts-ignore
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

// @ts-ignore
const lista= new DoubleLinkedList<number>();
lista.push(10);
lista.push(20);
lista.push(30);
lista.push(40);
lista.push(50);
lista.push(60);
lista.push(70);
console.log("Lista:",lista.toArray());
console.log("Pegou:", lista.GetElementAt(2)?.value);
console.log("apagou:",lista.DeleteAt(0)?.value);
let meter=lista.InsertAt(0,897876);
console.log("Lista final:",lista.toArray());
console.log("Lista invertida:", lista.toReverseArray());
