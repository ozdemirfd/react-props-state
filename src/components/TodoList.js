import React from "react";
import TodoItems from "./TodoItems";

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {
          title: 'Get a shopping cart',
          completed: false,
          id: 123456789
        },
        {
          title: "Buy milk",
          completed: false,
          id: 987654321
        },
        {
          title: "Buy egg",
          completed: false,
          id: 678905432
        }
      ],
      newTask: ""
    }
    this.HandleInput = this.HandleInput.bind(this)
    this.HandleClick = this.HandleClick.bind(this)

  }

  HandleInput(e) {
    this.setState({ newTask: e.target.value })
  }
  HandleClick(e) {
    if (this.state.newTask.trim()) {
      //create new object
      let newItem = {
        title: this.state.newTask,
        completed: false,
        id: Date.now()
      }
      //concatenate new task object to the previous task in the state
      this.setState(prevState => {
        return {
          tasks: prevState.tasks.concat(newItem)
        }
      })
      this.state.newTask = "";
    } else {
      alert('Please enter a value')
    }


  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onInput={this.HandleInput} value={this.state.newTask} />
          <button type="button" onClick={this.HandleClick}>Add</button>
        </form>
        <TodoItems tasks={this.state.tasks} />
      </div>
    )
  }
}

export default TodoList;