import React from 'react'
import ReactDOM from 'react-dom'

const devs = [
 {id:1,name:'Rey',des:'Sup lil nigs',img:'/assets/me.jpg'},
 {id:2,name:'Jasper',des:'Jullyver bading',img:null},
 {id:3,name:'Jed',img:null},
 {id:4,name:'Regie',img:null}
]

class MainPage extends React.Component{
 
 
  render (){
  
  const devslist = devs.map(dev=>
  <div key={dev.id} className="text-center card-body border rounded m-1 bg-light shadow-sm col-sm-5">
  <i className="card-title"><h3>{dev.name}</h3></i>
  <p className="card-text">{dev.des?dev.des:'no description provided'}</p>
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