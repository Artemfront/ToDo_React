import React from 'react'
import Header from "../components/Header"
import Title from "../components/Title"
import TodoItem from "../components/TodoItem"
import InputField from '../components/InputField'


export default function TodoList() {

  let [value, setValue] = React.useState('')
  let [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem('todos')) || [])

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  function addTodo() {
    if(todos.length === 5) {
      alert("Amount of your tasks is bigger than optimal amount!")
    }else if(value === '') {
      return 
    } else {
      let newTodo = {
        id: todos.length+1,
        title: value,
        completed:false
      }
      setTodos([...todos, newTodo])
      setValue('')
    }
  }

  const changeValue = (event) => {
    setValue(event.target.value)
  }

  function removeAll() {
    setTodos([])
  }

  function doneTodo(key) {
    setTodos([...todos.filter((todo) => todo.id !== key)])
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      })
    )
  }

  return (
    <div className = "todolist">
      <Header/>
      <div className="contentContainer">
        <Title/>
        <InputField 
          removeAll = {removeAll}
          addTodo={addTodo}
          changeValue = {changeValue}
          value = {value}
        />
        <div className="titleTasks">
          <span>Tasks</span>
        </div>
        <div className="tasks">
          {todos.map((todo, index) => {
            return <TodoItem 
              todo={todo} 
              index={index} 
              key={index}
              doneTodo={doneTodo}
              toggleTodo={toggleTodo}
            />
          })}
        </div>
      </div>
    </div>
  )
}
