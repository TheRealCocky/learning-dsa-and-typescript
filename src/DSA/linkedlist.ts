// @ts-ignore
class Node<T>{
        value:T
        // @ts-ignore
    next:Node<T> | null

    constructor(element:T) {
    this.value=element;
        this.next=null;
    }
}

// @ts-ignore
class List{
    toReverseArray(): any {
        throw new Error("Method not implemented.");
    }
    // @ts-ignore
    head:Node<T>| null
    counter:number
    constructor() {
        this.head=null;
        this.counter=0;
    }

    // @ts-ignore
    push(element:Node<T>):void{
        // @ts-ignore
        const node= new Node(element);
        if(this.head== null){
            this.head=node;
        }else{
            let current=this.head;
            while(current.next != null){
                current=current.next;
            }
            current.next=node;
        }
        this.counter++;
    }

    // @ts-ignore
    GetElementAt(position:number):Node<T>| null{
        if(position >=0 && position < this.counter){
            // @ts-ignore
            let node:Node<T>=this.head;
            for(let i =0 ; i < position && node != null;i++){
                node=node.next;
            }
            return node;
        }
        return undefined;
    }

    // @ts-ignore
    DeleteAt(position:number):Node<T>| null{
        if(position < 0 || position >= this.counter){
            return null;
        }
        let current=this.head;
        if(position===0){
            this.head=current.next;
        }else{
            let index:number=0;
            let previous;
            while(index< position){
                previous=current;
                current=current.next;
                index++;
            }
            previous.next=current.next;
        }
        this.counter--;
        return current;
    }

    // @ts-ignore
    InsertAt(position:number,element:T):boolean{
        if(position < 0 || position >= this.counter){
            return false;
        }
        // @ts-ignore
        let node= new Node(element);
        if(position===0){
            // @ts-ignore
            node.next=this.head;
            this.head=node;
        }else{
            let previous=this.GetElementAt(position-1);
            // @ts-ignore
            node.next=previous.next;
            previous.next=node;
        }
        this.counter++;
        return true;
    }

    toArray(): Array<number> {
        const arr: Array<number> = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

// @ts-ignore
const lista= new List<number>();
lista.push(10);
lista.push(20);
lista.push(30);
lista.push(40);
lista.push(50);
console.log(JSON.stringify(lista,null,2))

let pegar= lista.GetElementAt(3);
console.log("pegou:",pegar.value);

let apagar= lista.DeleteAt(1);
console.log("apagou:",apagar.value);

let por= lista.InsertAt(0,898989);

console.log(JSON.stringify(lista,null,2))
console.log(lista.toArray())