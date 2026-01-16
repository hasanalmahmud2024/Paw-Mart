import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        axios.get(`https://pawmart-backend-eight.vercel.app/orders`)
            .then(response => {
                setMyOrders(response.data);
                // setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching listings:', error);
            });
    }, [])

    // console.log(myOrders);


    return (
        <div className='min-h-[50vh] py-5 mb-5'>
            <title>PawMart | My Orders</title>
            <h2 className="text-3xl font-bold my-8 text-center">My Orders</h2>

            <div className="overflow-x-auto mb-16">
                <table className="table table-xs text-center">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Phone</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) =>
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
                                    <td>{order?.note}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-10">
                {
                    myOrders.length ? 
                        <button className='btn btn-wide inline-block text-center bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-102'>
                        Download Report
                    </button> 
                    : <p>Order Something or Adopt a pet</p>
                }
            </div>
        </div>
    );
};

export default Orders;