import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import UpdateModal from '../../components/UpdateModal/UpdateModal';
import Swal from 'sweetalert2';

const MyListings = () => {
    const [selectedListing, setSelectedListing] = useState(null);
    const [myListings, setMyListings] = useState([]);
    const { user, setLoading } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`https://pawmart-backend-eight.vercel.app/my-listings?email=${user?.email}`)
            .then(response => {
                // console.log(response);
                setMyListings(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching listings:', error);
            });
    }, [setLoading, user?.email]);

    // console.log(myListings);

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
                axios.delete(`https://pawmart-backend-eight.vercel.app/delete/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            const filterData = myListings.filter(listing => listing?._id != id);
                            setMyListings(filterData);
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
        setMyListings(prev =>
            prev.map(listing => {
                const isUpdated = listing._id === updatedService._id;
                return isUpdated ? updatedService : listing;
            })
        );
    };

    return (
        <div className='min-h-[50vh] py-5 mb-5'>
            <title>PawMart | My Listings</title>
            <h2 className="text-4xl font-bold my-6 ml-6">My Listings</h2>

            <div className="overflow-x-auto">
                <table className="table pl-2 text-center">
                    {/* head */}
                    <thead className=''>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Pick Up Date</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myListings?.map(listing => (
                                <tr key={listing?._id} className='text-sm'>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={listing?.imageUrl}
                                                        alt={`image of ${listing?.name}`} />
                                                </div>
                                            </div>
                                            <div className='text-left'>
                                                <div className="font-bold text-lg">{listing?.name}</div>
                                                <div className="text-sm opacity-50">{listing?.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xs md:text-sm'>{listing?.description}</td>
                                    <td>{listing?.date}</td>
                                    <td>{listing?.location}</td>
                                    <td>{listing?.price}</td>
                                    <th>
                                        <div className="flex flex-col md:flex-row gap-2 justify-center">
                                            {/* modal button and modal */}
                                            <button className="btn inline-block text-center bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-105" onClick={() => setSelectedListing(listing)}>Edit</button>
                                            <button onClick={() => handleDelete(listing?._id)} className="btn bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-105">Delete</button>
                                        </div>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                selectedListing && (
                    <UpdateModal
                        listing={selectedListing}
                        isOpen={true}
                        onClose={() => setSelectedListing(null)}
                        onUpdate={handleUpdate}
                    />)
            }
        </div>
    );
};

export default MyListings;