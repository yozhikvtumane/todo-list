import React from 'react'

export default class TodoItem extends React.Component {
    constructor() {
        super()
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAmountChange = this.handleAmountChange.bind(this)
        this.state = {
            
        }
    }

    handleDelete() {
        if (typeof this.props.onDelete === 'function') {
            this.props.onDelete(this.props.item.id)
        }
    }
    
    handleAmountChange(e) {
        console.log("handleAmountChange", e.target.value, this.props)
        // e.preventDefault()
        if (typeof this.props.onAmountChange === 'function') {
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