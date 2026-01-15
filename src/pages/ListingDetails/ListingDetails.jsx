import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import Swal from 'sweetalert2';

const ListingDetails = () => {
    const [listing, setListing] = useState();
    const { user, setLoading, loading } = useContext(AuthContext);
    const { id } = useParams();
    const modalRef = useRef(null);

    // const { name, price, imageUrl, date, category, createdAt, description, email, location,  } = listing || {};

    useEffect(() => {
        axios.get(`https://pawmart-backend-eight.vercel.app/listing/${id}`)
            .then(response => {
                setListing(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching listings:', error);
                setLoading(false);
            });
    }, [id, setLoading]);

    // console.log(listing)

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const address = form.address.value;
        const phoneNumber = form.phoneNumber.value;
        const note = form.note.value;

        const formData = {
            productId: id,
            productName,
            buyerName,
            buyerEmail,
            quantity,
            price,
            address,
            phoneNumber,
            note,
            date: new Date()
        }

        axios.post('https://pawmart-backend-eight.vercel.app/orders', formData)
            .then(res => {
                console.log(res.data);

                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Ordered Successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                    modalRef.current?.close();
                }
            })
            .catch(err => {
                console.log(err);

                let errorMessage = "Something went wrong!";
                if (err.response) {
                    errorMessage = err.response.data.message || errorMessage;
                } else if (err.request) {
                    errorMessage = "No response from the server. Please try again.";
                }
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            });
    }

    if (loading) {
        return <>
            <LoadingComponent></LoadingComponent>
        </>
    }

    return (
        <div>
            <title>PawMart | {listing?.name}</title>

            <div className="max-w-[90vw] mx-auto p-12 flex flex-col md:flex-row gap-4 md:items-center ">
                <img
                    src={listing?.imageUrl}
                    alt={listing?.name}
                    className="max-h-112 max-w-md w-full object-contain rounded-xl"
                    loading="lazy" />
                <div className='grid border-l border-gray-500 pl-3'>
                    <div>
                        <h1 className="text-4xl font-bold mb-3">{listing?.name}</h1>
                        <div className="badge badge-outline badge-warning mb-5 text-xs">{listing?.category}</div>
                        <p className="mb-8">{listing?.description}</p>
                        <div className=" font-semibold mb-2">
                            Pick Up Date: <span className="text-teal-500">{listing?.date}</span>
                        </div>
                        <div className="mb-2">Owner's email: <span className="text-xl">{listing?.email}</span></div>
                        <div className="mb-8">Location: <span className="text-xl">{listing?.location}</span></div>
                        {
                            listing?.category === "Pet" ?
                                <div className='text-2xl py-1'>For Adoption</div>
                                : <div className="mb-4 flex gap-3 items-center">Price: <span className="text-2xl"> ৳ {listing?.price}</span></div>
                        }
                    </div>
                    <div className="card-actions mt-5">
                        <button
                            className="btn inline-block text-center bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-105 mt-4"
                            onClick={() => document.getElementById('my_modal_3').showModal()}
                        >{listing?.category === "Pet" ? "Adopt" : "🛒 Order Now"}
                        </button>
                    </div>
                </div>
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className="modal-box bg-base-200 border-base-300 rounded-box p-4">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* copied from daisyUI */}
                    <form onSubmit={handleOrder} className="fieldset w-full p-4">
                        <legend className="fieldset-legend">Product details</legend>

                        <label className="label">Product</label>
                        <input readOnly defaultValue={listing?.name} type="text" name='productName' className="input w-full" placeholder="Product Name" />

                        <label className="label">Buyer Name</label>
                        <input defaultValue={user?.displayName} type="text" name='buyerName' className="input w-full" placeholder="Name" />

                        <label className="label">Buyer Email</label>
                        <input readOnly defaultValue={user?.email} type="email" name='buyerEmail' className="input w-full" placeholder="Email" />

                        <label className="label">Quantity</label>
                        <input required type="number" name='quantity' className="input w-full" placeholder="Quantity" defaultValue={1} readOnly={listing?.category === "Pet"} />

                        <label className="label">Price</label>
                        <input readOnly defaultValue={listing?.price} type="number" name='price' className="input w-full" placeholder="Price" />

                        <label className="label">Address</label>
                        <textarea required type="text" name='address' className="input w-full" placeholder="Address" />

                        <label className="label">Phone Number</label>
                        <input required type="text" name='phoneNumber' className="input w-full" placeholder="Phone Number" />

                        <label className="label">Additional Note</label>
                        <textarea type="text" name='note' className="input w-full" placeholder="Additional Note" />

                        <button type='submit' 
                        className="btn inline-block text-center bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-102 mt-4"
                        >{listing?.category === "Pet" ? "Adopt" : "🛒 Order Now"}</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ListingDetails;