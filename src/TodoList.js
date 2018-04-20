import React, {Component } from 'react'


export default class TodoList extends Component {

  state={
    todoInput:'',
    todos:[],
    todosTotal:0,
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target.value)

  }
  handleInputChange= (state,props)=>{
    return {todoInput:state.todoInput}
  }

  handleChange= (e)=>{
    console.log(e.target.value);
  }

  render(){
    let { todoInput } = this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='todoInput' onChange={this.handleChange} value={todoInput} />
          <button>Add</button>
        </form>
        <span>{`0 todos missing out of 11 in total`}</span>
        <ul>
          <li style={{'textDecoration':'line-through'}}>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    )
  }
}
