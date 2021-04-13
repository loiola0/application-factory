import React from 'react';
import { Link } from 'react-router-dom';

export default function Erro(){
    return(
        
        <div>
            <h1>Erro 404</h1>
            <span>Você pode estar procurando</span><br/>
                <Link to="/">Home</Link><br/>
                <Link to="/sobre">Sobre</Link><br/>
                <Link to="/contato">Contato</Link><br/>
        </div>

    );
}