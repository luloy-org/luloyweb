import React from 'react'
import ReactDOM from 'react-dom'

const devs = [
 {
  id:1,
  name:'Regie',
  des:'Sup lil nigs',
  img:null,
  pos:'UI Designer'
 },
 {
  id:2,
  name:'Jasper',
  des:'Jullyver bading',
  img:null,
  pos:'Developer'
 },
 {
  id:3,
  name:'Jed',
  img:null,
  pos:null
 },
 {
  id:4,
  name:'Rey',
  img:null,
  pos:'Lead Developer'
 }
]

class MainPage extends React.Component{
 
 
  render (){
  
  const imgs = {
   width:'100px',
   height:'100px',
   objectFit:'cover'
  }
  
  const devslist = devs.map(dev=>
  <div key={dev.id} className="media card-body border rounded m-1 bg-light shadow-sm col-lg-1">
  <img style={imgs} className="rounded" justify-self-center src={dev.img?dev.img:'./assets/user.png'}></img>
  <div className="media-body m-2">
  <i className="card-title"><h4>{dev.name}<span className="badge shadow m-1 badge-info">{dev.pos?dev.pos:''}</span></h4></i>
  <hr/>
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