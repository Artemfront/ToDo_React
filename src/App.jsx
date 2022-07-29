import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Settings from "./pages/Settings"
import TodoList from "./pages/TodoList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/settings" element = {<Settings/>}/>
        <Route path = "/todolist" element = {<TodoList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
