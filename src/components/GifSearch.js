import React from 'react'

export default class GifSearch extends React.Component{

	render() {
		return(
			<form onSubmit = {this.props.fetchData}>
				<input type="text" onChange = {this.props.changeQuery} />
				<input type="submit" />
			</form>
		)
	}


}