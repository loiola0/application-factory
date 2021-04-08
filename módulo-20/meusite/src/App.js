import React,{Component} from 'react';
import Feed from './components/feed';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id:1,username:"Victor",likes:130,comments:14},
                {id:2,username:"AuucuoGelson",likes:240,comments:9},
                {id:3,username:"John Wick",likes:30,comments:2},
                {id:4,username:"Paula",likes:1,comments:1},
            ]
        };
        
       
    }

    render(){
       
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                        <Feed key={item.id} username={item.username} likes={item.likes} comments={item.comments}/>
                    );
                    
                })}
            </div> 
        );
    }
}

export default App;