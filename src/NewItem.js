import React from 'react'

export default class NewItem extends React.Component {
	constructor() {
		super()
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

		this.state = {
			text: ""
		}
	}

	handleChange(opt) {
		this.setState({
			text: opt.target.value
		})
	}

	handleSubmit(event) {
		
		event.preventDefault()
		if (this.state.text === "") return
		if (typeof this.props.onItemCreate === 'function') {
			this.props.onItemCreate(this.state.text)
			this.setState({text: ""})
		}
	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
						key="newItemInput"
						type="text"
						onChange={this.handleChange}
						placeholder="Add new todo item"
						value={this.state.text} 
					/>
					<input 
						key="newItemSubmit"
						type="submit"
						value="Add"
					/>
				</form>
			</div>
		)
	}
}