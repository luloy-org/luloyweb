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
  
  
  const devslist = Devs.map(dev=>{
   const imgstye = {
    objectFit:'cover',
    height:'200px',
    width:'100%',
    margin:'0px'
   }
  return (
   <div key={dev.id} className="card m-1 p-0 break-word" style={{width:'200px'}}>
  <img className="card-img-top" style={imgstye} src={dev.img?`./assets/${dev.img}`:'./assets/user.png'} alt="Card image"/>
  <div className="m-0">
    <h5 className="card-title p-1 m-0 text-center">{dev.name}{dev.icon?' • ':''}<span className={`bi-${dev.icon?dev.icon:''}`}></span></h5>
    <p className="card-body">{dev.des?dev.des:'no description provided'}</p>
  </div>
</div>
   )})
  
  return (
   <div>
   <button onClick={function () {
    window.history.back()
   }} className="btn m-1 btn-info"><span className="bi-chevron-left"></span> Back</button>
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