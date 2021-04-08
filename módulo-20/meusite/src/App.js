import React,{Component} from 'react';
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            status: true
        };
        
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({status: true});
    }

    sair(){
        this.setState({status: false});
    }

    render(){
        return(
            <div>

                {this.state.status ? 
                    <div>
                        <h2>Bem-Vindo ao Sistema!</h2>
                        <button onClick={this.sair}>Sair</button>
                    </div> :
                    <div>
                        <h2>Olá visitante! Faça seu login</h2>
                        <button onClick={this.entrar}>Entrar</button>
                    </div>
                }
                
                <div>
                    <h2>Curso React Js</h2>
                </div>
                
            </div>
        );
    }
}

export default App;