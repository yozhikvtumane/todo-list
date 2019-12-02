import React from 'react'
import NewItem from './NewItem'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {

	constructor() {
		super()
		this.handleItemCreate = this.handleItemCreate.bind(this)
		this.renderItems = this.renderItems.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleAmountChange = this.handleAmountChange.bind(this)

		this.state = {
			items: []
		}
	}

	handleItemCreate(item) {
		console.log('item handleItemCreate', item)
		let stateItem = {
			text: item.text,
			id: Date.now(),
			itemCount: item.itemCount
		}
		
		this.setState({
			items: [...this.state.items, stateItem]
		})
	}

	handleDelete(itemId) {
		let newArr = this.state.items.filter(value => value.id !== itemId)
		this.setState({
			items: [...newArr]
		})
	}
	
	handleAmountChange(itemId, amount) {
		console.log("itemId, amount", itemId, amount)
		let newArr = this.state.items.map(item => {
			console.log("item inside map", item)
			if (itemId === item.id) {
				item.itemCount = amount
				return item
			} else {
				return item
			}
		})
		
		console.log('newArr', newArr)
		this.setState({items: [...newArr]})
	}

	renderItems() {
		return this.state.items.map(value => {
			console.log("TodoList Value" , value)
			return <TodoItem key={value.id} item={value} onDelete={this.handleDelete} onAmountChange={this.handleAmountChange}/>
		})
	}

	render() {
		return (
			<div>
				<NewItem onItemCreate={this.handleItemCreate}/>
				{this.renderItems()}
			</div>
		)
	}
}