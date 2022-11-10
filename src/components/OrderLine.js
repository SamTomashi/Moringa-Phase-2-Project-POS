import React from "react"

function OrderLine(){

    const row = <React.Fragment>
        <div className="row">
            <div className="col">
                <select name="item" onChange={()=>{}}>
                    <option value="item 1">Item 1</option>
                    <option value="item 2">Item 2</option>
                </select>
            </div>
            <div className="col">
                <input name="price" onChange={()=>{}} type="text" readOnly/>
            </div>
            <div className="col">
                <input name="qty" onChange={()=>{}} type="number" value="1" min="1"/>
            </div>
            <div className="col">
                <input name="lineTotal" readOnly onChange={()=>{}} type="text" value=""/>
            </div>
        </div>
    </React.Fragment>

    return row
}

export default OrderLine