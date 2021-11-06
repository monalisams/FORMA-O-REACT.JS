export default class Categorias{
    constructor(){
        this.categorias = [];
        this.inscritos = [];

    }

    inscrever(func){
        this.inscritos.push(func);
    }

    desinscrever(func){
        console.log(this._inscritos.length)
        this._inscritos = this._inscritos.filter(f => f !== func);
        console.log(this._inscritos.length)
    }
    notificar(){
        this.inscritos.forEach(func => {
            func(this.categorias);
        });
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
      } 
    
}