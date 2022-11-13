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
    const response = await fetch('http://localhost:3004/orders',{
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



return (
    <div className="container">
        <form onSubmit={submitOrders}>
            {
                orders.map((order, index)=> {
                    return <OrderLine order={order} orders={orders} setOrders={setOrders} index={index} key={index}/>
                })
            }
            <button className="btn btn-sm btn-dark" onClick={addOrder}>
                <FontAwesomeIcon className="" icon="plus"/>
            </button>
            <button className="btn btn-sm" onClick={submitOrders}>Submit Order</button>
        </form>
        
    </div>
)
}

export default Orders