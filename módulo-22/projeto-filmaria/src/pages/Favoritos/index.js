import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './favoritos.css';

export default function Favoritos(){

    const [filme,setFilmes] = useState([]);

    useEffect(()=>{

        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);

    },[]);

    function handleDelete(id){
        let filtroFilmes = filme.filter((item)=>{
            return (item.id !== id);
        });

        setFilmes(filtroFilmes);
        localStorage.setItem('filme',JSON.stringify(filtroFilmes));
    }

    return(
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>

                <ul>
                    {filme.map((item)=>{
                        return(
                            <li key={item.id}>
                                <span>{item.nome}</span>

                                <div>
                                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                    <button onClick={() => handleDelete(item.id)}>Excluir</button>
                                </div>

                            </li>
                        )
                    })}
                </ul>

        </div>
    );
}
