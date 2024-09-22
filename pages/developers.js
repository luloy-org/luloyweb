import React from 'react'
import ReactDOM from 'react-dom'
import * as Data from '/data/maindata'


class MainPage extends React.Component{
 
 
  render (){

  const imgs = {
   width:'100px',
   height:'100px',
   objectFit:'cover'
  }
  
  
  const devslist = Data.Devs.map(dev=>{
   const imgstye = {
    objectFit:'cover',
    height:'200px',
    width:'100%',
    margin:'0px'
   }
   
  return (
   <div key={dev.id} className=" card m-1 p-2 break-word" style={{width:'200px'}}>
  <img className="card-img-top rounded" style={imgstye} src={dev.img?`./assets/${dev.img}`:'./assets/user.png'} alt="Card image"/>
  <div className="m-0">
    <h5 className="card-title p-1 m-0 text-center">{dev.name}</h5>
  </div>
</div>
   )})
  return (
   <div onLoad={function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
   }}>
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