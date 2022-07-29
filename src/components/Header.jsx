import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Header() {
    let navigate = useNavigate()

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'right'
        },
        headerBtn: {
            margin: "30px 0",
            width: "110px",
            height: "30px",
            fontSize: "18px",
            letterSpacing: "3px",
            float:'right'
        }
    }

    function BackToHome() {
        navigate('/')
    }

  return (
    <div className = "header">
      <div className="container"  style = {styles.container}>
        <button onClick = {BackToHome} style = {styles.headerBtn}>Home</button>
      </div>
    </div>
  )
}
