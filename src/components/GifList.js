import React, { Component } from 'react';

class GifList extends Component {
  // constructor(props) {
  //   super(props)
  // }

  gifList() {
    return this.props.links.map(link => <li><a href={link}><img src={link}/></a></li>)
  }
  
  render() {
    return (
      <ul>
        {this.gifList()}
      </ul>
    )
  }

}

export default GifList