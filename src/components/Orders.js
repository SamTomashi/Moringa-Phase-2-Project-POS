import React, {useState, useEffect} from "react"

const Orders = ()=> {

    const [orders, setOrders] = useState([])

    useEffect(()=> {
        fetch('https://tomashi.loca.lt/orders')
        .then(response => response.json())
        .then(data => setOrders(data))
    },[orders])

    const order = orders.map((item, index)=> {
        return <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`flush-heading-${index}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index}`} aria-expanded="false" aria-controls={`#flush-collapse-${index}`}>
                            {`Order no ${index+1} with ${item.length} items`}
                        </button>
                    </h2>
                    <div id={`#flush-collapse-${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading-${index}`} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
    })

    return(
        // <table class="table table-striped table-hover">
        //     <thead>
        //         <tr>
        //             <th>#</th>
        //             <th>Date</th>
        //             <th>Total</th>
        //         </tr>
        //     </thead>
        //     <tbody>
                
        //     </tbody>
        // </table>

        <div className="accordion accordion-flush" id="accordionFlushExample">
              {order}
        </div>
    )
}

export default Orders