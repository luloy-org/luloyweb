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
   <Alert/>
   </div>
   )
 }
}
class Alert extends React.Component{
 render(){
  
  return (
   <div>
   <div className="border m-1 alert alert-success">
   <h3 className="bi-check-circle"></h3>
   <p>Page loaded</p>
   </div>
   <div className="card m-1 border ">
   <h5 className="card-header">Devs: </h5>
   <button onClick={
    function () {
     navigate('devs')
     
    }
   } className="btn btn-warning m-3">
   Developers <span className="bi-wrench"></span>
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