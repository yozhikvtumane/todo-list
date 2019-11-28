import React from 'react'

export default class TodoItem extends React.Component {
    constructor() {
        super()
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        if (typeof this.props.onDelete === 'function') {
            this.props.onDelete(this.props.item.id)
        }
    }

    render() {
        console.log("todoitem props",this.props)
        return (
            <div>{this.props.item.text}
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}