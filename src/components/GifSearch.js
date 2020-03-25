import React from 'react'

class GifSearch extends React.Component{

    state = {
        search: ""
    }

    handleChange = (e) => {
        debugger
        this.setState({
            search: e.target.value
        })
    }

    // handleSubmit(e){
    //   e.preventDefualt()
    //   this.props.searchGifs(this.state.search)

    // }

    render(){
        return(
            <div id="gif-search">
                <input type="text" value={this.state.search} onChange={this.handleChange}></input>
                <input type="submit" value="submit" onClick={(e) => this.props.searchGifs(this.state.search)}></input>
            </div>
        )
    }
}

export default GifSearch