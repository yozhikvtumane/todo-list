import React from 'react'
import NewItem from './NewItem'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {

    constructor() {
        super()
        this.handleItemCreate = this.handleItemCreate.bind(this)
        this.renderItems = this.renderItems.bind(this)
        this.handleDelete = this.handleDelete.bind(this)


        this.state = {
            items: []
        }
    }

    handleItemCreate(item) {
        let stateItem = {
            text: item,
            id: Date.now()
        }
        this.setState({
            items: [...this.state.items, stateItem]
        })
    }

    handleDelete(itemId) {
        let newArr = this.state.items.filter(value => value.id != itemId)
        this.setState({
            items: [...newArr]
        })
    }

    renderItems() {
        // let items = [...this.state.items]
        return this.state.items.map(value => <TodoItem item={value} onDelete={this.handleDelete}/>)
        // console.log()
        // return items.map((item,i) => {
        //     return <div key={item.id}>{item.text}</div>
        // })
        // return <div>Tady budou items</div>
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