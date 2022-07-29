import React from 'react'
import propTypes from "prop-types"

function TodoItem(props) {
  let classes = []

  if(props.todo.completed) classes.push('done')
  

  return (
    <div className = "todoitem done`" id={props.todo.id}>
      <span className={classes.join(' ')}>
          <input 
            type = "checkbox" 
            style = {{width:'12px', margin:'0 7px'}} 
            onChange = {() => props.toggleTodo(props.todo.id)}
            checked={props.todo.completed}
            id={props.todo.id}
          />
        {props.todo.title}
      </span>
      <button 
        onClick = {() => props.doneTodo(props.todo.id)}
        id = {props.todo.id}
        >
          Done
        </button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  doneTodo: propTypes.func.isRequired,
  toggleTodo: propTypes.func.isRequired
}

export default TodoItem