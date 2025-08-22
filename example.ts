let x: string | number | boolean=13
console.log(typeof(x));

interface Z { x(): string }

class A implements Z{
    x(): string {
        throw new Error("Method not implemented.");
    }
}

class B implements Z{
    x(): string{
        throw  new Error('Method not implemented');
    }
}

function exemploComInstanceof(paramentro: Z) {
    if (paramentro instanceof A) {
        console.log("Sou a classe A");
    }
    else if (paramentro instanceof B) {
        console.log("Sou a classe B");
    }
}
exemploComInstanceof(new A());


function calcular(a:number, b:number) :string{
  return `O resultado é: ${a+b}`;
}

let resultado:string;
resultado=calcular(20,30);
console.log(resultado);

function  yaya (codigoany:any):number{
    let codigonumber:number=<number>codigoany;
    return codigoany*10;
}
yaya(10);
