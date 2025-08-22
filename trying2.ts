let arr:number[]=[];
let por:Array<number>=[10,20,30,40,50];

//arr.push(por.value)
for(let i=0;i < por.length;i++){
    if(arr[i]===0){
        console.log("Lista vazia");
    }else{
        arr.push(por[i]);
    }
}
//arr.map((a)=> a*10);
 /*interface dados:T<>{
    name:string,
    age:number,
    country:string
}*/
//CRIANDO FUNCAO GENERICA

function generica <T>(){ }
generica<number>();
generica<string>();

function fungenerica <T>(value:T):T{
    return value;
}
console.log("Generica:",fungenerica("Euclides"))//string
console.log("Generica:",fungenerica(100))//number
 console.log("Generica:",fungenerica(true))//boolean



console.log(arr);

function factorial(n:number):number{
    if(n==0 || n==1) {
        return 1;
    }
  return   n* factorial(n-1);
}
console.log(`Factorial:`,factorial(3));


