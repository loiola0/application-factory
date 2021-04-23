import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
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
        localStorage.setItem('filmes',JSON.stringify(filtroFilmes));
        toast.success('Filme excluído com sucesso');
    }

    return(
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>


            {filme.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}
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
