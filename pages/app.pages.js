
import HomePage from './home'
import AboutPage from './about'
import DevsPage from './developers'
import navigate from '/app'

import React from 'react'
import ReactDOM from 'react-dom'

export const routes = {
 'home': HomePage(),
 'about': AboutPage(),
 'devs': DevsPage(),
 'viewprof': null,
 'not_found': notFound()
}

var notif_count = 0
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

class Notif extends React.Component{
 render(){
  return (
  <div className="rounded">
  {Notifications.map(item=>newNotification(item.t1,item.t2,item.t3,item.icon))}
   </div>
  )
 }
}

function newNotification(type, title, text, icon){
 return (
  <div key={`notif-${notif_count}`} className={`border m-1 alert alert-${type} alert-dismissible`}>
     <h3 className={`bi-${icon}`}>{icon?' ':''}{title}</h3>
     <p>{text}</p>
     <button className="btn-close" data-bs-dismiss="alert"></button>
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
 notif_count++
 ReactDOM.render(<Notif></Notif>,notif_Section)
}