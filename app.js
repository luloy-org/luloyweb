import React from 'react';
import ReactDOM from 'react-dom';
import {routes, notify} from './pages/app.pages.jsx'

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
 var path = routes[route]?route:'not_found'
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
 const success = (path=route)?true:false
 notify(
  success?'success':'danger',
  success?'Success':'Error',
  success?`${path} loaded!`:'Unknown route',
  success?'check-circle-fill':'x-circle-fill'
 )
}

//Outside the function
const disbtn = document.querySelectorAll('.dis-link')
disbtn.forEach((but)=>{
 but.onclick=(event)=>{
  const attr = but.getAttribute('name')
 notify(
  'warning',
  'Information',
  attr?`${attr} is disabled`:'this button is disabled',
  'exclamation-circle-fill'
 )
 }
})
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
