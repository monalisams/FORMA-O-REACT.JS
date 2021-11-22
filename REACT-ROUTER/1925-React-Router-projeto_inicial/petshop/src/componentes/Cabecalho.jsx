/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import imagem from '../assets/img/doguito.svg'
import './cabecalho.css'
const Cabecalho = () =>{

    return (
        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icone">
                </span>
            </div>
            <div className="cabecalho-container">
                <Link to="/" className="Flex flex--center">
                    <img className="cabecalho__logo" src={imagem} alt="Logo Doguito"/>  
                    <h1 className="cabecalho__titulo">PetShop</h1>
                </Link>
            </div>
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><Link  to="#" className="menu-item
                        menu-item--entrar" >Entrar</Link></li>
                    <li><Link  to="#" className="menu-item">Produtos</Link></li>
                    <li><Link  to="/" className="menu-item">Blog</Link></li>
                    <li><Link to="/sobre" className="menu-item">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background">

            </div>
        </header>
    )
}

export default Cabecalho