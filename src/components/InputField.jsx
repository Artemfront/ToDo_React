import React from 'react'
import propTypes from "prop-types"

function InputField(props) {
  return (
    <div className="inputs">
          <input
            type="text" 
            className = "textInput" 
            value = {props.value} 
            onChange ={(event) => props.changeValue(event)}
          />
          <button className = "btnAdd" onClick = {props.addTodo}>Add</button>
          <button className = "btnRemove" onClick = {props.removeAll}>Remove</button>
    </div>
  )
}

InputField.propTypes = {
    removeAll: propTypes.func.isRequired,
    addTodo: propTypes.func.isRequired,
    changeValue: propTypes.func.isRequired,
    value: propTypes.string.isRequired
}

export default InputField