import React,{Component} from 'react';
import Member from './components/Member';
class App extends Component {

    render(){
        return(
            <div>
               <Member name="Visitante"/>
            </div>
        );
    }
}

export default App;