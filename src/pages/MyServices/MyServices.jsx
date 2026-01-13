import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import UpdateModal from '../../components/UpdateModal/UpdateModal';
import Swal from 'sweetalert2';

const MyServices = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [myServices, setMyServices] = useState([]);
    const { user, setLoading } = use(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:3000/my-services?email=${user?.email}`)
            .then(response => {
                // console.log(response);
                setMyServices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, [setLoading, user?.email]);

    // console.log(myServices);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/delete/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            const filterData = myServices.filter(service => service?._id != id);
                            setMyServices(filterData);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err))
               
            }
        });

        
    }

    const handleUpdate = updatedService => {
        setMyServices(prev =>
            prev.map(service => {
                const isUpdated = service._id === updatedService._id;
                return isUpdated ? updatedService : service;
            })
        );
    };

    return (
        <div className='min-h-[50vh] py-5 mb-5'>
            <title>PAWMART | My Services</title>
            <h2 className="text-4xl font-bold my-6 ml-6">My Services</h2>

            <div className="overflow-x-auto">
                <table className="table pl-2 text-center">
                    {/* head */}
                    <thead className=''>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Added</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myServices?.map(service => (
                                <tr key={service?._id} className='text-sm'>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={service?.imageUrl}
                                                        alt={`image of ${service?.name}`} />
                                                </div>
                                            </div>
                                            <div className='text-left'>
                                                <div className="font-bold text-lg">{service?.name}</div>
                                                <div className="text-sm opacity-50">{service?.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xs md:text-sm'>{service?.description}</td>
                                    <td>{service?.date}</td>
                                    <td>{service?.location}</td>
                                    <td>{service?.price}</td>
                                    <th>
                                        <div className="flex flex-col md:flex-row gap-2 justify-center">
                                            {/* modal button and modal */}
                                            <button className="btn btn-primary" onClick={() => setSelectedService(service)}>Edit</button>
                                            <button onClick={() => handleDelete(service?._id)} className="btn btn-error">Delete</button>
                                        </div>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
                    {
                        selectedService && (
                            <UpdateModal
                                service={selectedService}
                                isOpen={true}
                                onClose={() => setSelectedService(null)}
                                onUpdate={handleUpdate}
                            />)
                    }
        </div>
    );
};

export default MyServices;