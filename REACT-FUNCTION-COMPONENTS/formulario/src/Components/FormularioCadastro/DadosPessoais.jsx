import React, {useContext, useState} from 'react';
import {TextField, Switch, Button, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState(" ");
    const [sobrenome, setSobrenome] = useState(" ");
    const [cpf, setCpf] = useState(" ");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos] = useErros(validacoes)
        

        function possoEnviar(){
           
            for(let campo in erros){
               if (!erros[campo].valido){
                   return false
               }
            }

            return true;
        }
    
    return(
        <form 
            onSubmit={(event) => {
                event.preventDefault(); //para não seguir o padrão de recarregar a pag
                if(possoEnviar()){
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
                }
                
            }}
        > 
                     
            <TextField 
                value={nome}
                onChange={(event) =>{
                     setNome(event.target.value);
                }}

                id="nome" 
                name="nome"
                label="Nome" 
                variant="outlined" 
                margin="normal"
                fullWidth
                
            />

            <TextField 
                value={sobrenome}
                onChange={(event) =>{
                setSobrenome(event.target.value)
                }}

                id="Sobrenome" 
                name="sobrenome"
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />

            <TextField 
              value={cpf}
              onChange={(event) =>{
              setCpf(event.target.value)
              }}

                onBlur={validarCampos}
                error= {!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name="cpf"
                label="CPF" 
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel 
                value={promocoes}
                onChange={(event) =>{
                setPromocoes(event.target.value)
                }}

                label="Promoções" 
                control={
                <Switch  
                    checked={promocoes}
                    onChange={(event)=>{
                        setPromocoes(event.target.checked)
                    }} 
                    name="promocoes" 
                    color="primary"/>}
            /> 

            <FormControlLabel
                value={novidades}
                onChange={(event) =>{
                setNovidades(event.target.value)
                }}
                label="Novidades" 
                control={
                    <Switch 
                    checked={novidades}
                    onChange={(event)=>{
                        setNovidades(event.target.checked)
                    }}  
                    name="novidades" 
                    color="primary"/>}
            />
            
            <Button 
                type="submit" 
                variant="contained" 
                color="primary">
                Próximo
            </Button>   
        </form>   
    );
}

export default DadosPessoais;