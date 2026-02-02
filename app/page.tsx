"use client"
import { auth } from "./lib/firebase"
import { onAuthStateChanged
  signInWithEmailAndPassword
  signOut
 } from "firebase/auth"
import{useEffect, usestate} from "react";


export default function Home() {
  const[user,setUser]=usestate(null);
  useEffect =>{
    const unsub=
  }
  return (
    <div>
      {user ? ( 
        <button onClick={()=>signOut(auth)}>Logout</button>
      ):(
        <button onClick={()=>signInWithEmailAndPassword(auth,"[EMAIL_ADDRESS]","123456")}>Login</button>
      )}
    </div>
  )
}