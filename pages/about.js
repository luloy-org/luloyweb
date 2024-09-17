import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './home'
import navigate from '/app'
import {Data,Products,Getprice} from '/data/maindata'

class APage extends React.Component{
 constructor (){
  super()
  this.state = {}
 }
 
 render (){
  const AboutPageStyle = {
   padding:'0px'
  }
  
  const customers = Data.map(cus=>{
   var total = 0
   let hp = 0
   var item = ""
   return(
   <div key={cus.id} className="card-body bg-none m-1 border rounded">
   <h5 className="card-title">{cus.name}</h5>
   <table className="table table-hover">
   <thead className="thead-light">
   <tr>
   <th><i className="bi-box"></i><br/>Item</th>
   <th><i className="bi-currency-dollar"></i><br/>Unit Price</th>
   <th><i className="bi-cart"></i><br/>Quantity</th>
   <th><i className="bi-percent"></i><br/>Total</th>
   </tr>
   </thead>
   <tbody>
   {cus.orders.map(order=>{
   var itemTotal =Getprice(order.item)*order.quan||0
   total+=itemTotal
   if (hp<itemTotal){
    hp=itemTotal
    item=order.item
   }
   
    return (
   <tr key={Math.random()}>
   <td>{order.item?order.item:'empty'}</td>
   <td>{"₱"+Getprice(order.item)}</td>
   <td>{order.quan?order.quan:0}</td>
   <td>{`₱${Getprice(order.item)*order.quan||0}`}</td>
   </tr>
   )
   })}
   </tbody>
   </table>
   <ul className="list-group">
   <li className="list-group-item">Overall: ₱{total}</li>
   <li className="list-group-item">Highest Total: {item} - ₱{hp}</li>
   </ul>
   </div>
   
  )
  })
  
  
  return (
   <div style={AboutPageStyle}>
   <div className="m-2 card">
   <div className="card-body">
   <h3 className="card-title">{this.props.tit}</h3>
   <p className="card-text">{this.props.txt}</p>
   </div>
   </div>
   <div className="m-2 border rounded card-body">
   <h3 className="card-title">Luloy's storage</h3>
   <div className="progress">
   <div style={{width:'23%'}} className="progress-bar progress-bar-striped progress-bar-animated">23%</div>
   </div>
   </div>
   <button onClick={
   function (){
   navigate('nyanya')
   }
   } className="m-2 btn btn-info" >Go to home</button>
   <div className="m-1">
   {customers}
   </div>
   </div>
   )
 }
}

export default function AboutPage() {
 return (
  <APage tit='About page title' txt='Test Description'/>
  )
}