import React,{ Component } from "react";
import "./estilo.css"
 class Formulario extends Component{


    constructor(props){
      super(props);
      this.titulo = "";
      this.texto = "";
      this.categoria = "Sem Categoria";
      this.state = {categorias:[]}
  
      this._novasCategorias = this._novasCategorias.bind(this);
    }
    componentDidMount(){
      this.props.categorias.inscrever( this._novasCategorias);
      
    }
  
    componentWillUnmount(){
      this.props.categorias.desinscrever( this._novasCategorias);
    }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }
    _handleMudancaDeCategoria(evento){
      evento.stopPropagation();
      this.categoria = evento.target.value;

    }

    handlerMudancaTitulo(evento){
      evento.stopPropagation();
      this.titulo = evento.target.value;
    }

    handlerMudancaTexto(evento){
      evento.stopPropagation();
    this.texto = evento.target.value;
    }

    criarNota(evento){
      evento.preventDefault();
      evento.stopPropagation();
      this.props.criarNota(this.titulo, this.texto, this.categoria);
    }
    render(){
        return (
            <form className="form-cadastro"
              onSubmit={this.criarNota.bind(this)}
            >
              <select onChange={this._handleMudancaDeCategoria.bind(this)} className="form-cadastro_input">
                <option>Sem categoria</option>
              
              {this.state.categorias.map((categoria, index) => {
                return <option key={index}>{categoria}</option>
              })}

              </select>
            <input 
              type="text" 
              placeholder="Título"
              className="form-cadastro_input"
              onChange={this.handlerMudancaTitulo.bind(this)}
            />
            <textarea 
              rows={15} 
              placeholder="Escreva sua nota..." 
              className="form-cadastro_input" 
              onChange={this.handlerMudancaTexto.bind(this)}
            />
            <button className="form-cadastro_input form-cadastro_submit">
              Criar Nota
            </button>
          </form>
        )
    }
}
export default Formulario;