import React,{useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import './filme-info.css';
import api from '../../services/api';


export default function Filme(){

    const {id} = useParams();

    const history = useHistory();

    const [filme,setFilme] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                //tentou acessar com id que não existe, logo mandamos para a home.
                history.replace('/');
                return;
            }


            setFilme(response.data)
            setLoading(false);
        }

        


        loadFilmes();

    },[id,history]);

    function SalvarFilme(){
        const minhaList = localStorage.getItem('filmes');
        
        let filmesSalvos = JSON.parse(minhaList) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id);

            if(hasFilme){
                toast.info('Você já possui esse filme salvo!');
                //para a execução do código.
                return;
            }

            filmesSalvos.push(filme);
            localStorage.setItem('filmes',JSON.stringify(filmesSalvos));
            toast.success('Filme salvo com sucesso');

    }


  if(loading){
    return(
        <div className="filme-info">
            <h1>Carregando seu filme...</h1>
        </div>
    ); 
  }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={SalvarFilme}>Salvar</button>
                <button>
                    <a target="black" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a>
                </button>

            </div>

        </div>
    );
}