import React from 'react';
import {Link} from 'react-router-dom';
export default function Sobre() {
  return (
    <div>
        <h1>Sobre!</h1><br/>
        <tex>
            Olá somos a empresa tal e ficamos de tal maneira e entregamos tal produtos....<br/>
        <Link to="/">Home</Link><br/>
        <Link to="/contato">Contatos</Link><br/>
        </tex>
    </div>
  );
}


