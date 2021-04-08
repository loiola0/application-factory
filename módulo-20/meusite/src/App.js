import React,{Component} from 'react';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: "Victor",
            contador: 0
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }
    aumentar(){
       let state = this.state;
       state.contador += 1;
       state.nome = "Gabriel";
       this.setState(state);
    }

    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert("Opa! Chegou a zero...");
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h1>Meu nome é {this.state.nome}</h1>
                <hr/>
                <h1>Contador</h1>
                <h2>
                    <button onClick={this.diminuir}>-</button>
                        {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h2>
            </div>
        );
    }
}

export default App;