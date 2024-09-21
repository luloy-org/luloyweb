import React from 'react'
import ReactDOM from 'react-dom'
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
   var itemid = null
   return(
   <div key={cus.id} className="card bg-none m-1 border rounded table-responsive">
   <h5 className="card-header">{cus.name}</h5>
   <div className="card-body">
   <table className="table table-hover">
   <thead className="thead-light">
   <tr>
   <th><i className="bi-box"></i><br/></th>
   <th><i className="bi-currency-dollar"></i><br/></th>
   <th><i className="bi-cart"></i><br/></th>
   <th><i className="bi-minecart"></i><br/></th>
   </tr>
   </thead>
   <tbody>
   {cus.orders.map(order=>{
   const orderid = Math.round(Math.random()*Math.PI*1000)
   var itemTotal =Getprice(order.item)*order.quan||0
   total+=itemTotal
   if (hp<itemTotal){
   hp=itemTotal
   item=order.item
   }
    return (
   <tr  id={`item-${orderid}`} key={orderid}>
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
   </div>
   )
  })
  
 
  
  return (
   <div style={AboutPageStyle}>
   <div className="m-2">
   <div className="card">
   <h3 className="card-header">{this.props.tit}</h3>
   <p className="card-body">{this.props.txt}</p>
   </div>
   </div>
   <div className="m-2 border rounded card p-1">
   <h3 className="p-2">Storage Space: </h3>
   <div className="progress m-2">
   <div style={{width:'23%'}} className="progress-bar progress-bar-striped progress-bar-animated">23%</div>
   </div>
   </div>
   <button onClick={
   function (){
   navigate()
   }
   } className="m-2 btn btn-info" ><span className="bi-chevron-left"></span> Go to null</button>
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