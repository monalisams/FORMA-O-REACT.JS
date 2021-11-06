console.log(`Trabalhando com lista`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`); // adiconar

console.log(`Destinos possíveis: ${listaDeDestinos}`);

listaDeDestinos.splice(1,1); //remover (numArray, qtd itens que quer remover)

console.log(`Destinos possíveis: ${listaDeDestinos}`);
console.log(listaDeDestinos[1]); //mostrar apenar um Array