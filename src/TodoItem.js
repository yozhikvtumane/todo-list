import React from 'react'

export default class TodoItem extends React.Component {
    constructor() {
        super()
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAmoutChange = this.handleAmoutChange.bind(this)
    }

    handleDelete() {
        if (typeof this.props.onDelete === 'function') {
            this.props.onDelete(this.props.item.id)
        }
    }
    
    handleAmoutChange(e) {
        e.preventDefault()
        if (this.props.onAmountChange === 'function') {
            console.log("this.props.item.id, this.props.item.itemCount", this.props.item.id, this.props.item.itemCount)
            this.props.onAmountChange(this.props.item.id, this.props.item.itemCount)
        }
    }

    render() {
        console.log("todoitem props", this.props)
        return (
            <div>
                {this.props.item.text}
                <input type="number" value={this.props.item.itemCount} onInput={this.handleAmountChange}/>
                
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}