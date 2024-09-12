import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component{
 render (){
  const homestyle = {
   borderRadius:'0px'
  }
  return (
   <div>
   <div id="home-page" className="jumbotron text-center bg-dark" style={homestyle}>
   <div className="text-white">
   <h1 className="card-title">{this.props.title}</h1>
   <p className="card-text">{this.props.text}</p>
   </div>
   </div>
   <Alert/>
   </div>
   )
 }
}
class Alert extends React.Component{
 render(){
  const alertStyle = {
   margin:'5px'
  }
  
  return (
   <div style={alertStyle} className="alert alert-danger">
   <p data-feather="alert-triangle" style={{color:'red'}}></p>
   <p>This is an example of warning</p>
   </div>
   )
 }
}

export default function HomePage (){
 return (
  <MainPage title='Welcome! <user>' text='Test description'/>
  )
}