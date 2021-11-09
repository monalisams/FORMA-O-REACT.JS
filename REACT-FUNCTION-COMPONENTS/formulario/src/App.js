import React, { Component} from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from "@material-ui/core"
import { validarSenha, validarCPF } from "./models/Cadastro";
import ValidacoesCadastro from './contexts/ValidacoesCadastro';


class App extends Component {
  render (){
    return (
     <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" >Formulário de Cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha}}>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
      
     </Container>
  );
}
}

function aoEnviarForm(dados){
  console.log(dados)
}


export default App;
