import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OrderLine(){

    const row = <React.Fragment>
        <div className="mb-3 row">
            <div className="col m-0 p-1">
            <small className=" text-muted">Item</small><br></br>
                <select className="form-select form-select-sm" name="item" onChange={()=>{}}>
                    <option value="item 1">Item 1</option>
                    <option value="item 2">Item 2</option>
                </select>
            </div>
            <div className="col-2  m-0 p-1">
            <small className=" text-muted">Price</small><br></br>
                <input className="form-control form-control-sm" name="price" onChange={()=>{}} type="text" readOnly/>
            </div>
            <div className="col-2 m-0 p-1">
                <small className=" text-muted">QTY</small><br></br>
                <input className="form-control form-control-sm col-2" name="qty" onChange={()=>{}} type="number" value="1" min="1"/>
            </div>
            <div className="col  m-0 p-1">
                <small className=" text-muted">Total</small><br></br>
                <input className="form-control form-control-sm" name="lineTotal" readOnly onChange={()=>{}} type="text" value=""/>
            </div>
            <div className="col d-flex align-items-center">
                <FontAwesomeIcon icon="plus" />
            </div>
        </div>
    </React.Fragment>

    return row
}

export default OrderLine