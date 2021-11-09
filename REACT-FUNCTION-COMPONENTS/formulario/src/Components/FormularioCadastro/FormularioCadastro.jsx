
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';

function FormularioCadastro({aoEnviar, validacoes}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(()=>{
        if (etapaAtual === formularios.length-1){
        aoEnviar(dadosColetados);
    }
})
    
    
    
    const formularios = [
            <DadosUsuarios aoEnviar={coletarDados} />, 
            <DadosPessoais aoEnviar={coletarDados} /> ,
            <DadosEntrega aoEnviar={coletarDados} />
            
    ];

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
        
        proximo();
    }
    function proximo(){
        setEtapaAtual(etapaAtual+1);
    }    
  
    return<>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
     </>;
    
}


export default FormularioCadastro;