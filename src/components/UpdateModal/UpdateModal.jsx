import React, { use, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';

const UpdateModal = ({ isOpen, onClose, service, onUpdate }) => {
    const [category, setCategory] = useState(service?.category);
    const { user } = use(AuthContext);

    console.log(service);

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
            createdAt: service?.createdAt,
        }
        console.log(formData);

        axios.put(`http://localhost:3000/update/${service?._id}`, formData)
            .then(res => {
                console.log(res.data);
                
                const updatedService = { ...service, ...formData };
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
                                defaultValue={service?.name}
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
                                <option value="Pets">Pets</option>
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
                                defaultValue={service?.price}
                                type="number"
                                name="price"
                                min="0"
                                step="0.01"
                                className="input w-full"
                            />
                        </div>

                        {/* Location */}
                        <div className="form-control space-y-1">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <br />
                            <input
                                defaultValue={service?.location}
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
                                defaultValue={service?.imageUrl}
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
                                defaultValue={service?.description}
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
                                defaultValue={service?.date}
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
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn" onClick={onClose}>Cancel</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>

    );
};

export default UpdateModal;