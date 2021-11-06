import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function FormularioCadastro() {
    return(
        <form> 
            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"/>

            <TextField id="Sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"/>

            <TextField id="CPF" label="CPF" variant="outlined" fullWidth margin="normal"/>

            <label>Promoções</label>
            <input type="checkbox"/>

            <label>Novidades</label>
            <input type="checkbox"/>

            <Button 
                type="submit" 
                variant="contained" 
                color="primary">
                    Cadastro
                </Button>   
        </form>   
    );
}

export default FormularioCadastro;