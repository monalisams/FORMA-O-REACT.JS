import {Cliente} from "./Cliente.js"
import { Gerente } from "./funcionarios/Gerente.js"
import {Diretor} from "./funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12971923799);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Rodrigo", 10000, 12971923799);
gerente.cadastrarSenha("123");

const cliente = new Cliente ("Lais", "847239002112", "456")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(gerenteEstaLogado,clienteEstaLogado)