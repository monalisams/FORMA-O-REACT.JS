import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente (`Monalisa Martins`, 11111111111);
const cliente2 = new Cliente (`Alice`,22222222222);


const contaCorrenteC1 = new ContaCorrente(cliente1, 1001 );
const contaCorrenteC2 = new ContaCorrente(cliente2, 102 );

contaCorrenteC1.depositar(307);
contaCorrenteC2.depositar(307);

console.log(ContaCorrente.numeroDeContas)