import React from 'react'
import ReactDOM from 'react-dom'
import {Devs} from '/data/maindata'


class MainPage extends React.Component{
 
 
  render (){
  
  const imgs = {
   width:'100px',
   height:'100px',
   objectFit:'cover'
  }
  
  
  const devslist = Devs.map(dev=>
  <div key={dev.id} className="text-break media card-body border rounded m-1 bg-white shadow-sm col">
  <img style={imgs} className="border rounded-circle" src={`./assets/${dev.img?dev.img:'user.png'}`}></img>
  <div className="media-body m-2">
  <h4 className="card-text"><i className="card-title">{dev.name}{dev.icon?' • ':''}</i><i className={`m-1 bi-${dev.icon?dev.icon:'?'}`}></i></h4>
  <hr className="bg-light"/>
  <p className="card-text">{dev.des?dev.des:'no description provided'}</p>
  </div>
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