//classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamento pois essa é uma classe abstrata")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;  
    }

    set cliente (novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


//método abstrato, sempre tem que ser sobrescrito
    sacar(valor){
        throw new Error("Método sacar da conta é abstrato")
    }

    _sacar(taxa, valor){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0){
            return ;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}