import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

import './filme-info.css';
import api from '../../services/api';


export default function Filme(){

    const {id} = useParams();

    const [filme,setFilme] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            setFilme(response.data)
            setLoading(false);
        }


        loadFilmes();

    },[id]);

  if(loading){
    return(
        <div className="filme-info">
            <h1>Carregando seu filme...</h1>
        </div>
    ); 
  }

    return(
        <div className="filme-info">
            <h1>PÁGINA DETALHES - {id}</h1>
        </div>
    );
}