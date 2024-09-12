import React from 'react'
import ReactDOM from 'react-dom'

const devs = [
 {id:1,name:'Rey',des:'Sup lil nigs',img:'/assets/me.jpg'},
 {id:2,name:'Jasper',des:'Jullyver bading',img:'...'},
 {id:3,name:'Jed',img:'...'},
 {id:4,name:'Regie',img:'...'}
]

class MainPage extends React.Component{
 
 
  render (){
  const cardbod={
   margin:'5px'
  }
  
  const imgStyle={
   width:'100px',
   height:'100px',
   objectFit:'cover'
  }
  
  const devslist = devs.map(dev=>
  <div style={cardbod} key={dev.id} className="text-center col-sm-5 bg-light border rounded">
  <i><h1>{dev.name}</h1></i>
  <p>{dev.des?dev.des:'no description provided'}</p>
  </div>
  )
  
  return (
   <div>
   <div className="container">
   <div className="row">
   {devslist}
   </div>
   </div>
   </div>
  )
 }
}

export default function DevsPage() {
 return (
  <MainPage/>
 )
}