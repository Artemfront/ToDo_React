import React from 'react'
import Header from "../components/Header"
import Title from "../components/Title"
import "../App.css"
import {useNavigate} from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  function goToSettings () {
    navigate('/settings')
  }

  function goToAbout() {
    navigate('/about')
  }

  function goToTodoList() {
    navigate('/todolist')
  }

  return (
    <div className = "home">
      <Header/>
      <div className="contentContainer" style = {{justifyContent:'space-around'}}>
        <Title/>
        <div className="functions">
          <button onClick = {goToTodoList}>TodoList</button>
          <button onClick = {goToAbout}>About</button>
          <button onClick = {goToSettings}>Settings</button>
        </div>
      </div>
    </div>
  )
}
