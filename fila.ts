class fila<T>{
    private  items:T[]=[];

    push(item:T):void{
        this.items.push(item)
    }

    shift(): T| undefined{
        return this.items.shift();
    }

    peek():T|undefined{
        return this.items[0];
    }

    isEmpty():boolean{
        return  this.items.length===0;
    }

    size(): number{
        return this.items.length;
    }
}
const filas= new fila<number>();
filas.push(10);
filas.push(20);
filas.push(30);
filas.push(40);
filas.push(50);
console.log(filas);
console.log("apagou:",filas.shift())
console.log(filas);
console.log("estado:",filas.isEmpty());
console.log("tamanho:",filas.size());

