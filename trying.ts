let arr:number[]=[];
let data={
    "name":"Euclides",
    "age":23,
    "link":"euclidesbaltazar2002.vercel.app"
}

let por:number[]=[18,8,98,7687,4565,88,778]
arr.push();

let aya = function comidas(): any {
    let lista: string[] = ["Pão", "queijo", "fiambre", "baicon", "leite", "carne", "cafe", "cerveja"];

    for (let food = 0; food < lista.length; food++) {
        if (lista[food] === "cerveja") {
            return "it is not a food";
        }
    }

    return "all are foods"; // caso não encontre "cerveja"
};

let prints = aya();
console.log(prints);


//console.log(JSON.stringify(data,null,2));