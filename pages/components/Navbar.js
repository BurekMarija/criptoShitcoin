import React from 'react'
import Link from 'next/link'
import styles from "../../styles/Navbar.module.css"
import {useAppContext} from "../context/state"
import shitcoin from "../../image/shitcoin.jpg"
import Image from 'next/image'


export default function Navbar() {

const {currentUser, setUser}=useAppContext()
console.log(currentUser, "korisnik")

    
  function logout(){
    setUser(null)
  }

  
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
         <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {currentUser!==null && <Link href="/profile/[username]" as={`/profile/${currentUser}`}>Profile</Link>}
        <Link href="/coins">Coins</Link>
      </div>
      <div className={styles.shitcoin}><Image src={shitcoin} alt=""/></div>
      <div className={styles.logoutBox}>
      {currentUser===null &&<div><Link href="/login">Login</Link></div>}
      
      {currentUser!==null &&<div>Hy {currentUser}</div>}
      {currentUser!==null &&<button onClick={logout}>Logout</button>}
      </div></div>
  )
}
/* {(typeof window === 'undefined') &&<div>Hy {sessionStorage.getItem("username")}</div>}
      {(typeof window === 'undefined') &&<button onClick={logout}>Logout</button>}
      
      <Link href="/profile/[username]" as={`/profile/${currentUser}`}>Profile</Link>
      */