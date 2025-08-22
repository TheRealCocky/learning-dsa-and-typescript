export class conta{
   private readonly numeroConta: number;
    titular: string;
   private saldo:number;

    constructor(numeroConta:number,titular:string,saldo:number) {
    this.numeroConta=Math.floor(Math.random()*1000)+1;
    this.titular=titular;
    this.saldo=saldo;
    }

    protected getSaldo():number{
        return this.saldo;
    }

    addSaldo(saldo:number):void{

        this.saldo+=saldo;
    }

    sacarSaldo(saldo:number):string{
        if(this.saldo <= 0){
            return "sem saldo na conta"
        }
        else if(this.saldo < saldo)
        {
            return "saldo de conta insufinciente!"
        }
          else{
            this.saldo-=saldo
            return `${this.titular} acabastes de sacar $${saldo} da tua conta`
        }

    }
}

class constaPF extends conta{
    BI:string

    constructor(BI:string,numeroConta:number,titular:string,saldo:number) {
        super(numeroConta,titular,saldo);
        this.BI=BI;
    }
    consultar():string{
        return `saldo actual ${this.getSaldo()}`
    }
    sacar(valor: number) {
        if (this.getSaldo() > 0 && valor <= this.getSaldo()) {
            this.sacar(valor);
        }
    }
}
class constaPJ extends conta{
NIF:string
    constructor(NIF:string,numeroConta:number,titular:string,saldo:number) {
        super(numeroConta,titular,saldo);
        this.NIF=NIF;
    }
    consultar():string{
    return `saldo actual: ${this.getSaldo()}`
    }
    sacar(valor:number){
    this.sacar(valor)
    }


}

const contas=new conta(78777889,"Euclides Baltazar",2000);
//console.log(contas);

console.log("*******************$BEM VINDO AO BANCO MUNDIAL****************")
console.log("************************************************")
const pessoafisica = new constaPF("7656768899LD7889AD",1,"Joa paulo",0);
pessoafisica.addSaldo(10000)
console.log(pessoafisica.consultar());
console.log(pessoafisica.sacarSaldo(2000));
console.log(pessoafisica.consultar());
console.log("************************************************")
const pessoajuridica= new constaPJ("09987865433223D",1,"Unitel SA",3000);
pessoajuridica.addSaldo(90000);
console.log(pessoajuridica.consultar());
console.log(pessoajuridica.sacarSaldo(2000));
console.log(pessoajuridica.consultar());
