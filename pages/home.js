import React from 'react';
import ReactDOM from 'react-dom';

class MainPage extends React.Component{
 render (){
  const homestyle = {
   borderRadius:'0px'
  }
  return (
   <div>
   <div id="home-page" className="m-0 jumbotron text-center bg-dark" style={homestyle}>
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
  
  return (
   <div>
   <div className="border m-1 alert alert-success">
   <span data-feather="check"></span>
   <p>Page loaded</p>
   </div>
   <div className="card-body m-1 border bg-light">
   <h5 className="card-title">Feather icons: </h5>
   <span data-feather="home"></span>
   <span data-feather="tool"></span>
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