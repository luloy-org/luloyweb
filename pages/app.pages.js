
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