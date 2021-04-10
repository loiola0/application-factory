import React,{Component} from 'react'
import Clock from './assets/cronometro.png';
import './styless.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0.0,
      botao: 'Vai'
    };

    this.timer = null;
    this.limpar = this.limpar.bind(this);
    this.vai = this.vai.bind(this);

  }

  vai(){

    let state = this.state;

    if(this.timer !=null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'Vai';
    }else{
        this.timer = setInterval(()=>{
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = 'Pausar';
    }

    this.setState(state);
  }

  limpar(){
    if(this.timer !=null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0.0;
    state.botao = 'Vai';
    this.setState(state);

  }
  
  render(){
    return (
      <div className="container">
          <img src={Clock} className="img"/>
          <a className="timer">{this.state.numero.toFixed(1)}</a>
          <div className="areaBtn">
              <button className="botao" onClick={this.vai}>{this.state.botao}</button>
              <button className="botao" onClick={this.limpar}>Limpar</button>
          </div>

      </div>
    );
  }
  
}

export default App;
