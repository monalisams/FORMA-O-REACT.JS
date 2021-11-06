console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log(`Destinos possíveis: ${listaDeDestinos}`);

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if (listaDeDestinos[contador] == destino){
        console.log("Destino existe!");
        destinoExiste = true;
        break;
    } else{ destinoExiste = false;}
    
    contador += 1;
}

if(podeComprar && destinoExiste){
    console.log(`Boa viagem!!`);
}else {
    console.log(`Desculpe tivemos um erro!`);
}

for(let cont = 0; cont < 3; cont++){
    if (listaDeDestinos[contador] == destino){
        console.log("Destino existe!");
        destinoExiste = true;
        break;
    } 
}