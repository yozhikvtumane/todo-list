import React from 'react'

export default class NewItem extends React.Component {
	constructor() {
		super()
		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleAmountChange = this.handleAmountChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		

		this.state = {
			text: "",
			itemCount: 1
		}
	}

	handleTextChange(e) {
		
		this.setState({
			text: e.target.value
		})
	}
	
	handleAmountChange(e) {
		console.log("num input e.target", e.target.value)
		this.setState({
			itemCount: +e.target.value
		})
	}
	
	handleSubmit(event) {
		
		event.preventDefault()
		if (this.state.text === "") return
		
		if (typeof this.props.onItemCreate === 'function') {
			console.log('handleSubmit state', this.state)
			this.props.onItemCreate(this.state)
			this.setState({text: "", itemCount: 1})
		}
	}
	
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
						key="newItemTextInput"
						type="text"
						onChange={this.handleTextChange}
						placeholder="Add new todo item"
						value={this.state.text} 
					/>
					<input 
						type="number"
						key="newItemNumberInput"
						onChange={this.handleAmountChange}
						value={this.state.itemCount}
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