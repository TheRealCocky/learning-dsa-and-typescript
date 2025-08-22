function  genericas<T>(){};

function  fungenerica<T>(valor:T):T{
    return valor;
}

console.log("funcao generica:",fungenerica("Euclides"));
console.log("funcao generica:",fungenerica(10000));
console.log("funcao generica:",fungenerica(true));

class generica <T> implements  generic<T>{
    private arr: Array<T>=[];

    adding(arr:T){
        this.arr.push(arr);
    }

    get(){
        return this.arr;
    }
    Removeitem(item: T):T {
        let index= this.arr.indexOf(item);
        if(index > -1)
         return  this.arr.splice(index,1);
    }
}

interface generic <T>{
    Removeitem(item: T);
}

const numero= new generica<number>();
numero.adding(10);
numero.adding(20);
numero.adding(30);
numero.adding(40);
console.log("Número added:",numero.get());
console.log("removeu:",numero.Removeitem(1));

const palavra= new generica<string>();
palavra.adding("Euclides Baltazar");
console.log("word added:",palavra.get());

const logic= new generica<boolean>();
logic.adding("Euclides Baltazar is a grow ass man:",true);
console.log("Logic added:",logic.get());

