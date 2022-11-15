import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import OrderLine from "./OrderLine";

function Orders(){

const [orders, setOrders] = useState([{
    itemName: "",
    itemPrice: 0,
    qty: 1,
    lineTotal: 0
}])


const addOrder = (event) => {
    event.preventDefault()
    let newOrder = { 
        itemName: "",
        itemPrice: 0,
        qty: 1,
        lineTotal: 0
     }

     const lastOrderItem = orders[orders.length - 1]
     if(lastOrderItem.itemName === ""){
        alert("All order inputs are required before adding a new one!")
       return
     }

     setOrders([
        ...orders,
        newOrder
     ])

}

const submitOrders = async(event) => {
    event.preventDefault()
    const response = await fetch('https://tomashi.loca.lt/orders',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(orders)
    })
    .then((response)=> response.json())
    .then(data=> data);

    alert(`${response.length} items added successfully to your order!`)

}

const total = orders.reduce((acc, currentValue)=> acc + currentValue.lineTotal, 0);


return (
    <div className="container d-flex justify-content-between">
        <form className="border" onSubmit={submitOrders}>
        <img className="mx-auto d-block w-25" src="./images/supermarket.png" alt="logo"/>
            {
                orders.map((order, index)=> {
                    return <OrderLine order={order} orders={orders} setOrders={setOrders} index={index} key={index}/>
                })
            }
            <div className="d-flex justify-content-between p-4">
                <button className="btn btn-sm btn-dark" onClick={addOrder}>
                    <FontAwesomeIcon className="" icon="plus"/>
                </button>
                <button className="btn btn-sm btn-outline-dark  text-uppercase">Submit Order</button>
            </div>
        </form>
     
            <div className="border w-25 p-4 d-flex align-items-center justify-content-center">
                <h1 className="display-1">Total<br></br> Ksh{total}</h1>
            </div>
    </div>
)
}

export default Orders