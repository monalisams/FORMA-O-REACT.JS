import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import api from "./api";
import App from './App';
import Conta from './conta/Conta'

jest.mock('./api')

describe('Requisições para API', ()=>{
    it('exibir lista de transações através da API', async()=>{
        api.listaTransacoes.mockResolvedValue([
            {
                "transacao": "saque",
                "valor": '10',
                "data": "26/09/2020",
                "id": 1
              },
              {
                "transacao": "deposito",
                "valor": '20',
                "data": "12/11/2021",
                "id": 2
              }
        ]);

        render (<App/>);

        expect(await screen.findByText('saque')).toBeInTheDocument();
        
        expect(screen.getByTestId('transacoes').children.length).toBe(2)
    });

    it('Chama função de realziar transação quando o botão é clicado',()=>{
        
        const funcaoRealizarTransação = jest.fn()
        
        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransação}
        />);

        fireEvent.click(screen.getByText('Realizar operação'));

        expect(funcaoRealizarTransação).toHaveBeenCalled();
    })
})