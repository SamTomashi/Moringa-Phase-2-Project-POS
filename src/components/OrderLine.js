import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OrderLine({order, orders, setOrders, index}){
    const items = [
        {
            name: "shoes",
            price: 3000
        },
        {
            name: "trouser",
            price: 1200
        }
    ]

    const handleFormChange = (event)=> {
        let data = [...orders];
        data[index][event.target.name] = event.target.value;

        const name = data[index]['itemName'];
        const selectedItem = items.find((value)=> value.name === name)
        const itemPrice = parseFloat(selectedItem.price)

        data[index]['itemPrice'] = itemPrice
        data[index]['lineTotal'] = itemPrice * data[index]['qty']
        setOrders(data)
        console.log(data)
    }

    const removeOrder = (index)=> {
        let data = [...orders];
        data.splice(index, 1)
        setOrders(data)
    }


        const lineOrder = <div className="row m-1">
            <div className="col-sm-3">
                <select name="itemName" defaultValue={order.itemName} className="form-select form-select-sm" onChange={(event)=> handleFormChange(event)}>
                    <option>--Select Item--</option>
                    {items.map((item, index)=> <option value={item.name} key={index}>{item.name}</option>)}
                </select>
            </div>
            <div className="col-sm-2">
                <input className="form-control form-control-sm" type="text" name="itemPrice" value={order.itemPrice} onChange={(event)=> handleFormChange(event)}/>
            </div>
            <div className="col-sm-2">
                <input className="form-control form-control-sm" type="number" name="qty" value={order.qty} onChange={(event)=> handleFormChange(event)}/>
            </div>
            <div className="col-sm-2">
                <input className="form-control form-control-sm" type="text" name="lineTotal" value={order.lineTotal} onChange={(event)=> handleFormChange(event)}/>
            </div>
            <div className="col-sm-2">
                <button className="btn btn-sm" onClick={()=>{removeOrder(index)}}>
                    <FontAwesomeIcon icon="minus"/>
                </button>
            </div>
        </div>

    return lineOrder

}

export default OrderLine