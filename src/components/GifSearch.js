import React, {Component} from 'react'

export default class GifSearch extends Component{
    state = {
        search: ""
      };
    
      handleUserInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    render(){
        return (
            <div>
                <form onSubmit={e => this.props.submit(e, this.state.search)}>
            <input type="text" onChange={this.handleUserInput} name="search" />
            <input type="submit" />
            </form>
            </div>
            
        )
    }
}