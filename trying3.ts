class Carros<T>{
    id:number;
    marca:string;
    cor:string;
    peso:number;
    kilometragem:number;
    anoFabrico:number;

    constructor(id:number,marca:string,cor:string,peso:number,kilometragem:number,anoFabrico:number) {
        this.id=Math.floor(Math.random()*1000)+1;
        this.marca=marca;
        this.cor=cor;
        this.peso=peso;
        this.kilometragem=kilometragem;
        // @ts-ignore
        this.anoFabrico=new Date().getFullYear();
    }

    getPrice():string{
      const res=this.kilometragem*2000;
        return `The price of the car is: $${res}`;
    }

}

class Automatic extends Carros<Automatic>{
     percentagem:number
    constructor( percentagem:number,id:number,marca:string,cor:string,peso:number,kilometragem:number,anoFabrico:number) {
        super(id,marca,cor,peso,kilometragem,anoFabrico);
        this.percentagem=percentagem
    }
}

class Manual extends Carros<Manual>{

           mudancas:number
    constructor(mudancas:number,id:number,marca:string,cor:string,peso:number,kilometragem:number,anoFabrico:number) {
        super(id,marca,cor,peso,kilometragem,anoFabrico);
        this.mudancas=mudancas;
    }
}

// @ts-ignore
const carro= new Automatic<string>(100,"","Tesla","cinzento",18998,8898);
console.log(carro);
console.log(carro.getPrice());

console.log("******************************************")
// @ts-ignore
const carroManual= new Manual<string>(4,"","Ferrari","Preto",189898,890898,7889);
console.log(carroManual);
console.log(carroManual.getPrice());