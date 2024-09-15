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
  <div key={dev.id} className="media card-body border rounded m-1 bg-white shadow-sm col-lg-5">
  <img style={imgs} className="rounded" src={dev.img?dev.img:'./assets/user.png'}></img>
  <div className="media-body m-2">
  <h4><i className="card-title">{dev.name}</i><span className="badge small shadow m-1 badge-info">{dev.pos?dev.pos:''}</span></h4>
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