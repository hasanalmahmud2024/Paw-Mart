import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
const [myOrders, setMyOrders] = useState([]);

useEffect(()=>{
    axios.get(`http://localhost:3000/orders`)
        .then(response => {
            setMyOrders(response.data);
            // setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching services:', error);
        });
},[])

console.log(myOrders);



    
    return (
        <div>
            My Orders
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index)=>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{order?.productName}</td>
                                    <td>{order?.price}</td>
                                    <td>{order?.address}</td>
                                    <td>{order?.quantity}</td>
                                    <td>
                                        {order?.date
                                            ? new Date(order.date).toLocaleString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })
                                            : ""}
                                    </td>

                                    <td>{order?.phoneNumber}</td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Orders;