import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OrderLine({order, handleFormChange, removeOrder, index}){


        const lineOrder = <div className="row m-1">
                    <div className="col-sm-3">
                        <select name="itemName" defaultValue={order.itemName} className="form-select form-select-sm" onChange={(event)=> handleFormChange(index, event)}>
                            <option>--Select Item--</option>
                            <option value="item 1">Item 1</option>
                            <option value="item 2">Item 2</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <input className="form-control form-control-sm" type="text" name="itemPrice" value={order.itemPrice} onChange={(event)=> handleFormChange(index, event)}/>
                    </div>
                    <div className="col-sm-2">
                        <input className="form-control form-control-sm" type="number" name="qty" value={order.qty} onChange={(event)=> handleFormChange(index, event)}/>
                    </div>
                    <div className="col-sm-2">
                        <input className="form-control form-control-sm" type="text" name="lineTotal" value={order.lineTotal} onChange={(event)=> handleFormChange(index, event)}/>
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