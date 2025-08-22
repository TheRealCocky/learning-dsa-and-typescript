var languages : Array<string>=[];
var salas:number[]=[1,2,3,4,5]

//tuple
var tudo:[name:string,age:number,email:string]=["Euclides Baltazar",23,"euclidesbaltazar2002@gmail.com"]
languages.push('TypeScript');
//languages.push(3);
tudo.push("Jezybell Manuel",22,"jezibelmanyel@gmail.com");
let nome:string ="Euclides Baltazar";
let idade:number =23;
let sentence= `Eu sou ${nome} e tenho ${idade} de didade`;
console.log(sentence);
console.log("position:",sentence.indexOf(nome));
console.log(languages.length)
salas.push(78899898);
console.log(salas)
console.log("tuple:",tudo)
//enumera
export enum Week{
    Monday=1,
    Tuesday,
    wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export enum DiaDaSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
}

let fst=Week[1];
let second=Week["Tuesday"];
console.log("Day of the week",fst)
console.log("second day:",second);
console.log(DiaDaSemana.Sexta); //Sexta-feira
console.log(DiaDaSemana['Sabado']); //Sábado


//aceita varios tipos | significa uniao um atributo,metodo pode ter varios tipos
let union: string| number;
union="Euclides";
console.log("acitou string:",union);
union=12;
console.log("acitou numero:",union);

var arr: (number[]| string[]);
var i:number;
arr=[10,76,90,32];

for(i=0;i < arr.length; i++){
    console.log(arr[i]);
}

arr=["A","B","C","D"]

for(i=0; i< arr.length;i++){
    console.log(arr[i]);
}

//com parametro

export function DeleteTeste(usario:string|string[]){
usario=["yshsh","dhdhdjhd","hjhdjhdf"]
    if(typeof usario =="string"){
        console.log("usuario deletado");
    }else{
        var i;
        for(i=0; i< usario.length;i++){
            console.log("usuarios:",usario[i]);
        }
    }
}
let print=DeleteTeste("");
console.log(print);
