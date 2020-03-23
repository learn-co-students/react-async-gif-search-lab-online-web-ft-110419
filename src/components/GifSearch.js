import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    search: ""
  };

  handleUserInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.submit(e, this.state.search)}>
        <input type="text" onChange={this.handleUserInput} name="search" />
        <input type="submit" />
      </form>
    );
  }
}
export default GifSearch;
