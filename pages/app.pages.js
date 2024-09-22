
import HomePage from './home'
import AboutPage from './about'
import DevsPage from './developers'
import navigate from '/app'

import ReactDOM from 'react-dom'
import useState from 'react'
import React from 'react'

export const routes = {
 'home': HomePage(),
 'about': AboutPage(),
 'devs': DevsPage(),
 'viewprof': null,
 'not_found': notFound()
}

var count = 0
const notif_Section = document.getElementById('notif-sec')
const Notifications = []


export function notFound (){
 return (
  <div className="alert alert-danger m-1">
  <h5><span className="bi-exclamation-diamond"></span> Couldn't load page</h5>
  <p>Unable to load page<br/>Return to <button onClick={function(){
   navigate('home')
  }} className="btn btn-link m-0 p-0">home</button>?</p>
  </div>
 )
}

export default function Main (){
 var count = 0
  return (
  <div className="rounded column">
  {Notifications.map(notif=>{
  notif.id = count
   count++
   return (
   <div key={count} className={`border-0 m-2 alert-dismissible alert alert-${notif.t1}`}>
   <h5>{notif.icon?<span className={`bi-${notif.icon}`}> </span>:''}{notif.t2}</h5>
   <p>{notif.t3}</p>
   <button onClick={function () {
   const item = Notifications[parseInt(notif.id)]
   }} type="button" className="btn btn-close" data-bs-dismiss="alert" aria-label="closed"></button>
   </div>
  )
  })}
  </div>
  )
 }

export function notify (t1,t2,t3,i){
 Notifications.push({
  "t1":t1,
  "t2":t2,
  "t3":t3,
  "icon":i
 })
 ReactDOM.render(Main(),notif_Section)
}