import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './home'
import navigate from '/app'
import Data from '/data/customers'
import {Products, Getprice} from '/data/products'

class APage extends React.Component{
 constructor (){
  super()
  this.state = {}
 }
 
 render (){
  const AboutPageStyle = {
   padding:'0px'
  }
  
  const customers = Data.Customers.map(cus=>
   <div key={cus.id} className="card-body bg-none m-1 border rounded">
   <h5 className="card-title">{cus.name}</h5>
   <table className="table table-striped table-hover">
   <thead>
   <tr>
   <th>Item</th>
   <th>Unit Price</th>
   <th>Quantity</th>
   <th>Total</th>
   </tr>
   </thead>
   <tbody>
   {cus.orders.map(order=>
   <tr key={Math.random()}>
   <td>{order.item?order.item:'empty'}</td>
   <td>{"₱"+Getprice(order.item)}</td>
   <td>{order.quan?order.quan:0}</td>
   <td>{`₱${Getprice(order.item)*order.quan||0}`}</td>
   </tr>
   )}
   </tbody>
   </table>
   </div>
  )
  
  
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