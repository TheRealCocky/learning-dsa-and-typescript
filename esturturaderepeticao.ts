let condition:boolean=true;

if(condition){
    console.log("certo")
}
else{
    console.log("errado")
}

let perfil= "superuser";

if(perfil==="superuser"){
    console.log("Super usuairo");
}
else if(perfil==="admin"){
    console.log("Administrador");
}
else{
    console.log("Usuario comum")
}
//operador ternario
console.log(perfil==="superuser" ? "Super usuario" :"Administrador")
//com tres oposcoes
console.log(perfil==="superuser" ? "super usuairo" : perfil==="admin" ? "Administrador" : "Usuario comum")
//let profile="admin"
//let profile = null;
console.log(profile ?? 'Usuário comum')
console.log(profile ?? 'Usuário comum')


let perfil= "admin";

switch (perfil) {
    case "superuser":
        console.log("super usuarios");
        break;
    case "manager":
        console.log("Gerenete");
        break;
    case "admin":
        console.log("Administrador");
        break;
    case "user":
        console.log("usuario comum");
        break;
    default :
        console.log("sem perfil");
        break;

}

let condition=true;

while(condition){

    console.log("loading...")
}

{
    console.log("loading...")
}
while(condition);


var languages= ["javascript","TypeScript","C#","Java"];

for(let i=0; i < languages.length;i++){
    console.log(languages[i]);
}

languages.forEach(elements=>{
    console.log(elements);
})