console.log("Condicionais");


const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);


const idadeComprador = 15;
const estaAcompanhada = true;

if(idadeComprador > 18){
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(1,1);
}else if (estaAcompanhada == true){
        console.log(`Comprador maior de idade`);
        listaDeDestinos.splice(1,1);
        }else{
            console.log("Comprador menor de idade");
}


listaDeDestinos.splice(1,1); 

console.log(`Destinos possíveis: ${listaDeDestinos}`);
console.log(listaDeDestinos[1]); 

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);