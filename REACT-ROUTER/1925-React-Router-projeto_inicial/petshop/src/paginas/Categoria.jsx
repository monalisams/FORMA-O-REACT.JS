import React, { useState, useEffect } from 'react'
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom'
import '../assets/css/blog.css'
import ListaCategorias from '../componentes/ListaCategorias'
import ListaPost from '../componentes/ListaPost'
import {busca} from '../api/api'
import SubCategoria from '../paginas/SubCategoria'

const Categoria = () => {
    const {id} = useParams()
    const {url, path} = useRouteMatch()
    const [subcategorias, setSubCategorias] = useState([])
    
    useEffect(()=>{
        busca(`/categorias/${id}`, (categoria) =>{
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])

    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias/>
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategorias)=>(
                        <li className={`lista-categorias__categoria 
                        lista-categorias__categoria--${id}`}  key={subcategorias}>
                            <Link to={`${url}/${subcategorias}`}>
                                {subcategorias}
                            </Link>
        
                        </li>
                    ))
               
                }
            </ul>
            <Switch>
            <Route exect path={`${path}/:subcategorias`}>
                <SubCategoria/>
            </Route>
            <Route exact path={`${path}`}>
                <ListaPost url={`/posts?categorias=${id}`}/>
            </Route>
            </Switch>
        </>
    )
}

export default Categoria