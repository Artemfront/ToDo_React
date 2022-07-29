import React from 'react'
import Header from "../components/Header"
import Title from "../components/Title"


export default function Settings() {
  return (
    <div className = "settings">
      <Header/>
      <div className="contentContainer">
        <Title/>
        <div className="settingsContent">
            <h4 style = {{marginTop: '40px'}}>This page will be upgrade soon</h4>
        </div>
      </div>
    </div>
  )
}
