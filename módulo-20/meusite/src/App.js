import { props } from 'bluebird';
import React,{Component} from 'react';


class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} idade={this.props.idade} cargo={this.props.cargo}/>
                <Social fb={this.props.facebook}/>
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá sou o(a) {this.props.nome}</h2>
                <h3>Tenho {this.props.idade} anos</h3>
                <h3>Trabalho como {this.props.cargo}</h3>
            </div>
            
        );
    }
}

const Social = (props) => {
    return (
        <a href={props.fb}><h3>Facebook</h3></a>
    );
}
 
function App(){
    return(
     <div>
        <h1>Conheça nossa equipe</h1>
        <Equipe nome="Victor Gabriel" idade="20" cargo="Desenvolvedor Back-End"
            facebook="https://facebook.com"/>

        <Equipe nome="Jhamesosn Lucas" idade="20" cargo="Desenvolvedor Mobile"
            facebook="https://facebook.com/jhamessonlucas"/>
     </div>   
    );
}

export default App;