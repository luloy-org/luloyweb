import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function LoginPage(){
 
 const email = <input type="text" placeholder="Email"></input>
 return (
  <div className="card">
  <h5 className="card-header">Login</h5>
  <div className="card-body">
  {email}
  </div>
  </div>
 )
}