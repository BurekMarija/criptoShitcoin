import React from 'react'
import data from "./userdata.js"
import styles from "../styles/Profile.module.css"
import {useAppContext} from "./context/state.js"


export default function login() {
    const [userInput, setUserInput]= React.useState("")
    const {currentUser, setUser}=useAppContext()

    function handleChange(event) {
      var name = event.target.getAttribute('name')
      setUserInput(pr=>{
        return{...pr, [name]:event.target.value}
      })
    }
    
    function login(){
    const korisnik= data.filter(user=> user.username===userInput.username)
      if(korisnik.length!==0){
        setUser(korisnik[0].username)
        //window.location.href = "/" jel ti mene zezaš? Makne korisnika?
       }
      else{
        alert("Neispravno, molimo pokušajte ponovo ")
      }
    }
  
    return (
      <div className={styles.login}>
        <input onChange={handleChange} name="username" type="username" value={userInput.username} placeholder="username"></input>
        <input onChange={handleChange} name="password" type="password" value={userInput.password} placeholder="password"></input>
        <button onClick={login}>Log In</button>
      </div>
    )
}
