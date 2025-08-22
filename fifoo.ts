class Fifoo<T>{
    private items: Array<T>=[];

    push(element:T):void{
        this.items.push(element);
    }

    shift():T| undefined{
        return this.items.shift();
    }

    peek():T| undefined{
        return this.items[0];
    }

    isEmpty():boolean{
        return this.items.length===0;
    }

    size():number{
        return this.items.length;
    }

}

const fifo= new Fifoo<number>();
fifo.push(10);
fifo.push(20);
fifo.push(30);
console.log(fifo);
console.log("apagou:",fifo.shift());
console.log("size:",fifo.size());
console.log("topo:",fifo.peek());
console.log(fifo);