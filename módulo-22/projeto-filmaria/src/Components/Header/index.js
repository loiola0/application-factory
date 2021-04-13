import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';


export default function Header(){
    return(
        <header>
            <Link to="/" className="logo">Filmaria</Link>
            <Link to="/" className="favoritos">Salvos</Link>
        </header>
    );
}