import {fundoClaro,ConteudoClaro,textoFundoClaro, fundoEscuro,ConteudoEscuro, textoFundoEscuro} from './variaveis'

export const temaClaro ={
  body: fundoClaro,
  inside: ConteudoClaro,
  text: textoFundoClaro,
  filter:''
};

export const temaEscuro={
  body: fundoEscuro,
  inside: ConteudoEscuro,
  text: textoFundoEscuro,
  filter:"invert(100%)",
};
