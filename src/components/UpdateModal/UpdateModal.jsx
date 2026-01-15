import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';

const UpdateModal = ({ isOpen, onClose, listing, onUpdate }) => {
    const [category, setCategory] = useState(listing?.category);
    const { user } = useContext(AuthContext);

    console.log(listing);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.productName.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price,
            location,
            description,
            imageUrl,
            date,
            email,
            createdAt: listing?.createdAt,
        }
        console.log(formData);

        axios.put(`https://pawmart-backend-eight.vercel.app/update/${listing?._id}`, formData)
            .then(res => {
                console.log(res.data);

                const updatedService = { ...listing, ...formData };
                onUpdate(updatedService);
                onClose();
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='text-left'>

            <dialog id="my_modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
                <div className="modal-box max-w-2xl w-full">
                    <h3 className="font-bold text-lg">Edit Information</h3>

                    <form onSubmit={handleUpdate} method="dialog" className="mt-4 space-y-3">

                        {/* name field */}
                        <div className="form-control space-y-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <br />
                            <input
                                defaultValue={listing?.name}
                                name="productName"
                                type="text"
                                className="input w-full "
                                required />
                        </div>

                        {/* category */}
                        <div className="form-control space-y-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <br />
                            <select
                                name="category"
                                defaultValue={category}
                                required
                                className="input w-full "
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option value="Pet">Pet</option>
                                <option value="Food">Food</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Care Products">Care Products</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div className="form-control space-y-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <br />
                            <input
                                defaultValue={listing?.price}
                                type="number"
                                name="price"
                                min="0"
                                step="1"
                                className="input w-full"
                                disabled={category === "Pet"}
                            />
                        </div>

                        {/* Location */}
                        <div className="form-control space-y-1">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <br />
                            <input
                                defaultValue={listing?.location}
                                name='location'
                                type="text"
                                className="input w-full" />
                        </div>

                        {/* image Url */}
                        <div className="form-control space-y-1">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <br />
                            <input
                                defaultValue={listing?.imageUrl}
                                name='imageUrl'
                                type="text"
                                className="input w-full" />
                        </div>

                        {/* Description */}
                        <div className="form-control space-y-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <br />
                            <textarea
                                defaultValue={listing?.description}
                                name='description'
                                className="textarea w-full"
                                rows="3">
                            </textarea>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="label">
                                Date
                            </label> <br />
                            <input
                                defaultValue={listing?.date}
                                type="date"
                                name="date"
                                required
                                className="input w-full"
                                onFocus={(e) => e.target.showPicker()}
                            />
                        </div>

                        {/* Email (Readonly) */}
                        <div>
                            <label className="label">
                                Email
                            </label>
                            <br />
                            <input
                                type="email"
                                name='email'
                                value={user?.email || ''}
                                readOnly
                                className="input w-full"
                            />
                        </div>
                        <div className="modal-action">
                            <button type="submit" className="btn text-center bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition transform hover:shadow-xl hover:scale-105">Submit</button>
                            <button type="button" className="btn text-center py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-105" onClick={onClose}>Cancel</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>

    );
};

export default UpdateModal;