import React from "react";
class TodoList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tasks:[
        {title:'Get a shopping cart',
         completed:false,
         id:123456789
        },
        {title:"Buy milk",
         completed:false,
         id:987654321
        },
        {title:"Buy egg",
        completed:false,
        id:678905432
       }
      ]

    }
  }
  render(){
    return (
    <div>
    <input type="text"/>
    <button type="button">Add</button>
    </div>
    )
  }
}

export default TodoList;