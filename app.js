import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/home'
import AboutPage from './pages/about'
import DevsPage from './pages/developers'

const content = document.getElementById('content')

const routes = {
 'home': HomePage(),
 'about': AboutPage(),
 'devs': DevsPage()
}

const hiddenRoutes={
 'viewdevs': null
}

navigate(null)
 
function navigate (route){
 for (const x in routes){
  const btn = document.querySelector(`a[data-route=${x}]`)
  btn.parentElement.classList.remove('active')
 }
 const direction = routes[route]?route:'home'
 const navbtn = document.querySelector(`a[data-route=${direction}]`)
 
/* navbtn.parentElement.classList.add('active')*/
 navbtn.parentElement.classList.add('active')
 ReactDOM.render(routes[direction],content)
 feather.replace()
}

for (const x in routes){
 const btn = document.querySelector(`a[data-route=${x}]`)
 
 if (btn!=null){
  btn.onclick=()=>{
   navigate(x)
  }
 } else {
  console.error(`[${x}] is not a page`)
 }
 
}



//exports
export default navigate