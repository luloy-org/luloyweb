import React from 'react';
import ReactDOM from 'react-dom';
import navigate from '/app'

class MainPage extends React.Component{
 render (){
  const homestyle = {
   borderRadius:'0px'
  }
  return (
   <div>
   <div id="home-page" className="p-5 m-0 text-dark text-center bg-light" style={homestyle}>
   <h1 className="">{this.props.title}</h1>
   <p className="">{this.props.text}</p>
   </div>
   <div className="card m-1">
   <h1 className="card-header">Note: </h1>
   <p className="card-body">The contents of this website is only for test purposes and meant nothing</p>
   </div>
   <Alert/>
   </div>
   )
 }
}
class Alert extends React.Component{
 render(){
  
  return (
   <div>
   <div className="card m-1 border ">
   <h5 className="card-header">Info: </h5>
   <button onClick={
    function () {
     navigate('devs')
     
    }
   } className="btn btn-warning m-3">
   Members <span className="bi-shield-fill-check"></span>
   </button>
   </div>
   </div>
   )
 }
}

export default function HomePage (){
 return (
  <MainPage title='Welcome! <user>' text='Test description'/>
  )
}