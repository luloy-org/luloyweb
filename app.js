import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/home'
import AboutPage from './pages/about'
import DevsPage from './pages/developers'

const content = document.getElementById('content')
const loadingContent = document.getElementById('loadingContent')
const topbar = document.querySelector("#navbarsExample03")

const routes = {
 'home': HomePage(),
 'about': AboutPage(),
 'devs': DevsPage()
}

let navigating = false

function loadingElement() {
 return (
  <div className="loader spin"></div>
 )
}
 
function navigate (route){
 if(navigating==false){
  navigating=true
 for (const x in routes){
  const btn = document.querySelector(`a[data-route=${x}]`)
  btn.parentElement.classList.remove('active')
 }
 const direction = routes[route]?route:'home'
 const navbtn = document.querySelector(`a[data-route=${direction}]`)
 
 navbtn.parentElement.classList.add('active')
 ReactDOM.render(loadingElement(),loadingContent)
 ReactDOM.render(routes[direction],content)
 content.hidden=true
 loadingContent.hidden=false
 topbar.classList.remove('show')
 setTimeout(function (){
  loadingContent.hidden=true
  content.hidden=false
  feather.replace()
  navigating=false
 },1500)


for (const x in routes){
 const btn = document.querySelector(`a[data-route=${x}]`)
 const route = btn.getAttribute('data-route')
 
 if (btn!=null){
  btn.onclick=()=>{
   window.history.pushState({}, route, `#${route}`)
   navigate(route)
  }
 } else {
  console.error(`[${x}] is not a page`)
 }
}
} else {
 topbar.classList.remove('show')
 console.log('nav in progress')
}
}


function loaded() {
 const route= window.location.hash.replace("#","")||"home"
 navigate(route)
}

function  pop() {
const route= window.location.hash.replace("#","")||"home"
 navigate(route)
}

window.addEventListener("popstate",pop)

window.addEventListener("load",loaded())


//exports
export default navigate