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

     setOrders([
        ...orders,
        newOrder
     ])

}

const submitOrders = (event) => {
    event.preventDefault()
    console.log(orders)

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