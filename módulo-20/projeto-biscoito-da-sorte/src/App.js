import React, {Component} from 'react';
import BiscoitoImg from './assets/biscoito.png';
import './estilo.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoFrase: "",
    };
    this.frases = ["A persistência é o caminho do êxito.","O que não provoca minha morte faz com que eu fique mais forte.","Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.","O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
  "No meio da dificuldade encontra-se a oportunidade.","O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.","O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.","É parte da cura o desejo de ser curado."];
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"'+this.frases[numeroAleatorio]+'"';
    this.setState(state);
  }

  render(){
    return (
      <div className="container">
        <img src={BiscoitoImg} className="img"/>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
  
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
