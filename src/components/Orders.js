import React from "react";
import OrderLine from "./OrderLine";

function Orders(){
    const arr = [1, 2,3];
    const rows = arr.map((row, index)=> <div key={index}>
        < OrderLine/>
    </div>)
    return <React.Fragment>
        <div className="">
            {rows}
        </div>
    </React.Fragment>
}

export default Orders