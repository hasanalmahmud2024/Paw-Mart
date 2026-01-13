import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ServiceDetails = () => {
    const [service, setService] = useState();
    const { user, setLoading, loading } = use(AuthContext);
    const { id } = useParams();

    // const { name, price, imageUrl, date, category, createdAt, description, email, location,  } = service || {};

    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
            .then(response => {
                setService(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false);
            });
    }, [id, setLoading]);

    // console.log(service)

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

        axios.post('http://localhost:3000/orders', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }

    if (loading) {
        return <>
            <LoadingSpinner></LoadingSpinner>
        </>
    }

    return (
        <div>
            <title>PAWMART | {service?.name}</title>

            <div className="max-w-[90vw] mx-auto p-12 flex flex-col md:flex-row gap-4 md:items-center ">
                <img
                    src={service?.imageUrl}
                    alt={service?.name}
                    className="max-h-112 max-w-md w-full object-contain rounded-xl"
                    loading="lazy" />
                <div className='grid border-l border-gray-500 pl-3'>
                    <div>
                        <h1 className="text-4xl font-bold mb-3">{service?.name}</h1>
                        <div className="badge badge-outline badge-warning opacity-40 mb-5 text-xs">{service?.category}</div>
                        <p className="mb-8">{service?.description}</p>
                        <div className=" font-semibold mb-2">
                            Date: <span className="text-primary">{service?.date}</span>
                        </div>
                        <div className="mb-2">Contact: <span className="text-xl">{service?.email}</span></div>
                        <div className="mb-4 font-bold flex gap-3 items-center">Price: <span className="text-2xl"> ${service?.price}</span></div>
                        <div className="mb-8">Location: <span className="text-xl">{service?.location}</span></div>
                    </div>
                    <div className="card-actions mt-5">
                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Adopt/Order</button>
                    </div>
                </div>
            </div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-base-200 border-base-300 rounded-box p-4">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* copied from daisyUI */}
                    <form onSubmit={handleOrder} className="fieldset w-full p-4">
                        <legend className="fieldset-legend">Product details</legend>

                        <label className="label">Product</label>
                        <input readOnly defaultValue={service?.name} type="text" name='productName' className="input" placeholder="Product Name" />

                        <label className="label">Buyer Name</label>
                        <input defaultValue={user?.displayName} type="text" name='buyerName' className="input" placeholder="Name" />

                        <label className="label">Buyer Email</label>
                        <input readOnly defaultValue={user?.email} type="email" name='buyerEmail' className="input" placeholder="Email" />

                        <label className="label">Quantity</label>
                        <input required type="number" name='quantity' className="input" placeholder="Quantity" />

                        <label className="label">Price</label>
                        <input readOnly defaultValue={service?.price} type="number" name='price' className="input" placeholder="Price" />

                        <label className="label">Address</label>
                        <textarea required type="text" name='address' className="input" placeholder="Address" />

                        <label className="label">Phone Number</label>
                        <input required type="text" name='phoneNumber' className="input" placeholder="Phone Number" />

                        <label className="label">Additional Note</label>
                        <textarea type="text" name='note' className="input" placeholder="Additional Note" />

                        <button type='submit' className="btn btn-primary max-w-80 mt-5">Order</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ServiceDetails;