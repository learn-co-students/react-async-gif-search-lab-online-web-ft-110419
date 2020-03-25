//presentational component

import React, {Component} from 'react';

export default class GifList extends Component{

    //this needs to map something
    render(){
        return(
            <div>
            {this.props.gifs.map(gif => <img key={gif} src={gif} alt={gif}></img>)}
            </div>
        )
    }
}