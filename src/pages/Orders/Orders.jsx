import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { jsPDF } from "jspdf";
import { autoTable } from 'jspdf-autotable';
import Swal from 'sweetalert2';

const Orders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`https://pawmart-backend-eight.vercel.app/orders?email=${user?.email}`)
            .then(response => {
                setMyOrders(response.data);
                // setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching listings:', error);
            });
    }, [])

    const handleDownloadPDF = () => {
        try {
            const doc = new jsPDF();
            doc.text("My Orders", 105, 10, { align: "center" });

            const tableData = myOrders.map((order, index) => [
                index + 1,
                order?.productName || "",
                order?.price || "For Adoption",
                order?.address || "",
                order?.quantity || "",
                order?.date
                    ? new Date(order.date).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                    })
                    : "",
                order?.phoneNumber || "",
                order?.note || "",
            ]);

            autoTable(doc, {
                head: [["No.", "Product Name", "Price", "Address", "Quantity", "Date", "Phone", "Note"]],
                body: tableData,
                startY: 20,
            });

            doc.save("my_orders.pdf");
        } catch (error) {
            console.error("Failed to generate PDF:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to generate PDF.",
            });
        }
    };



    return (
        <div className='min-h-[50vh] py-5 mb-5'>
            <title>PawMart | My Orders</title>
            <h2 className="text-3xl font-bold my-8 text-center">My Orders</h2>

            {
                myOrders.length ? (<>
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
                        <button onClick={handleDownloadPDF} className='btn btn-wide inline-block text-center bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-102'>
                            Download Report
                        </button>
                    </div>
                </>)
                    : <p className='text-center font-bold'>Nothing to Show. <br /> Order or Adopt Something.</p>}
        </div>
    );
};

export default Orders;