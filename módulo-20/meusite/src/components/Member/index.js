import React,{Component} from 'react';

class Member extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name
        };
        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        this.setState({name:"Victor"});
    }

    render(){
        return(
            <div>
                <h2>Bem vindo(a) {this.state.name}</h2>
                <button onClick={this.entrar}>
                    Entrar como Victor
                </button>
                <button onClick={()=>{this.setState({name:''})}}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Member;