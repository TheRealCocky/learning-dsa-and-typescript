class Stack<T>{
    private items: Array<T>=[];

    push(item: T): void{
        this.items.push(item)
    }

    pop(): T | undefined{
        return  this.items.pop();
    }

    peek():T | undefined {
        return  this.items[this.items.length-1];
    }
    isEmpty(): boolean {
        return this.items.length===0;
    }

    Size():number{
        return this.items.length;
    }
}

const numbers= new Stack<number>();
numbers.push(10);
numbers.push(20);
numbers.push(30);
numbers.push(40);
numbers.push(50);
console.log("Pilha",numbers)
console.log("apagou:",numbers.pop());
console.log(numbers)

