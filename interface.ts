
//o ? indica que é opcional
//uma interface de objectos é herdada(extends) outra interface de ojectos
interface pessoa{
   name:string,
    age:number,
    email:string,
    telefone?:number
}
//uma interface de metodos é implmentada(implements) dentro de uma class
interface tributavel {
    calculoTributavel():number;
}

interface PF extends pessoa {
    conta:number;
    bi:number;
    AbrirConta():boolean;
}

interface PJ extends pessoa{
    conta:number;
    nif:number;
    AbrirConta?():boolean;
}
export class conta{
    numeroConta:number
    titular:string
    saldo:number


    constructor(numeroConta:number,titular:string,saldo:number) {
        this.numeroConta=numeroConta;
        this.titular=titular;
        this.saldo=saldo;
    }


}
class contapF extends conta implements tributavel  {

    constructor(IBAN:number,numeroConta:number,titular:string,saldo:number) {
        super(numeroConta,titular,saldo);
        IBAN=Math.floor(Math.random()*1000)+1;

    }
    // @ts-ignore
    calculoTributavel():number{
      const res= this.saldo*10;
    }

    // @ts-ignore
    getIban():number{
        return 0 ;
    }
}

class constaPJ extends conta implements tributavel{

    constructor(numeroConta:number,titular:string,saldo:number) {
        super(numeroConta,titular,saldo);

    }
    // @ts-ignore
    calculoTributavel():number{
       const res= this.saldo*2003;
    }
}

const conta1= new constaPJ(8988989,"Euclides",1000);
console.log(conta1);

const euclides= new contapF(1,98393,"Cocky",1000);
console.log(euclides);
console.log("O IBAN:",euclides.getIban());

