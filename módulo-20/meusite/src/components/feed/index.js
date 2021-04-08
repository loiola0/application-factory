import React,{Component} from 'react';

class Feed extends Component {

    render(){
        return(
                 
            <div key={this.props.key}>
                <h3>{this.props.username}</h3>
                <a>{this.props.likes > 1 ? this.props.likes+' likes ' : this.props.likes+' like '}
                     / {this.props.comments > 1 ? this.props.comments+' comments' : this.props.comments+' comment'}</a>
                <hr/>
            </div>
           
        
        );
    }
}

export default Feed;