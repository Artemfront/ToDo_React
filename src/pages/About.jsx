import React from 'react'
import Header from "../components/Header"
import Title from "../components/Title"

export default function About() {
  return (
    <div className = "about">
      <Header/>
      <div className="contentContainer">
        <Title/>
        <div className="aboutContent">
            <h4 style = {{marginTop: '40px'}}>This is training project for understanding React basics.</h4>
        </div>
      </div>
    </div>
  )
}
