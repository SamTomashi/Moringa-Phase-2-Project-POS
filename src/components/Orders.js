import React from "react";
import OrderLine from "./OrderLine";

function Orders(){
    const arr = [1, 2,3];
    const rows = arr.map((row, index)=> <OrderLine key={index}/>
    )
    return <React.Fragment>
        <form className="">
            {rows}
            <div>
                <button className="btn btn-primary btn-sm">Submit order</button>
            </div>
        </form>
    </React.Fragment>
}

export default Orders