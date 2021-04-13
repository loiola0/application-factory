import React from 'react';
import {Link} from 'react-router-dom';
export default function Contato() {
  return (
    <div>
        <h1>Contatos</h1><br/>
        <span>Email: victor@mail.com</span><br/>
        <Link to="/">Home</Link><br/>
        <Link to="/sobre">Sobre</Link><br/>
       
    </div>
  );
}


