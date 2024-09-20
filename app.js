import React from 'react';
import ReactDOM from 'react-dom';
import {routes} from './pages/app.pages'
import * as DataManager from './data/datamanager'

const content = document.getElementById('content')
const toggle_theme = document.getElementById('mySwitch')



export function setTheme() {
 const data = localStorage.theme?localStorage.theme:'light'
 
 switch (data) {
  case 'light':
   document.documentElement.setAttribute('data-bs-theme', 'light')
   break;
  case 'dark':
   document.documentElement.setAttribute('data-bs-theme', 'dark')
   toggle_theme.checked = true
   break;
 }
}

function navigate(route) {
 const path = routes[route]?route:'home'
 const buttons = document.querySelectorAll(`a[data-route]`)
 
 buttons.forEach((navbtn)=>{
  const data = navbtn.getAttribute('data-route')
  
  if (data==path){
   navbtn.classList.add('active')
  } else {
   navbtn.classList.remove('active')
  }
 })
 
 ReactDOM.render(routes[path],content)
}

//Outside the function
const buttons = document.querySelectorAll('a[data-route]')
buttons.forEach((btn)=>{
 const data = btn.getAttribute('data-route')
 btn.onclick=function(){
  navigate(data)
 }
})


toggle_theme.oninput=(event)=>{
 var value = event.target.value
 const html = document.documentElement
 const attr = html.getAttribute('data-bs-theme')
 
 switch (attr) {
  case 'light':
   document.documentElement.setAttribute('data-bs-theme', 'dark')
   localStorage.setItem('theme','dark')
   break;
  case 'dark':
   document.documentElement.setAttribute('data-bs-theme', 'light')
   localStorage.setItem('theme','light')
   break
 }
}

window.loadpage = navigate
window.loadtheme = setTheme


export default navigate
