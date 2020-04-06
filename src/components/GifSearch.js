import React, { Component } from 'react';

class GifSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.props.handleSearch(e, this.state.search)}>
          <input onChange={this.handleInput} type='text' value={this.state.search} />
          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

export default GifSearch