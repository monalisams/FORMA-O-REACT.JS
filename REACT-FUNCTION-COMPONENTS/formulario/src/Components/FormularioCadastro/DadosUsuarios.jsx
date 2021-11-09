import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from '../../hooks/useErros';

function DadosUsuarios({aoEnviar}){
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);



       

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
           
        }}>
            <TextField
            value={email}
            onChange={(event) =>{
                 setEmail(event.target.value);
            }}
                id="email"
                name="email" 
                label="email" 
                type="email"
                variant="outlined" 
                fullWidth 
                margin="normal"
                required
             /> 
            <TextField
             value={senha}
             onChange={(event) =>{
                  setSenha(event.target.value);
             }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha" 
                name="senha"
                label="senha" 
                type="password"
                variant="outlined" 
                fullWidth 
                margin="normal"
                required
             /> 
             <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuarios