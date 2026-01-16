import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddListings = () => {
    const { user } = useContext(AuthContext);
    const [category, setCategory] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.productName.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;
        const date = form.date.value;
        const email = form.email.value;

        // Validate image URL
        const isValidUrl = (url) => {
            try {
                new URL(url);
                return true;
            } catch (e) {
                return false;
            }
        };

        if (!isValidUrl(imageUrl)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Image URL",
                text: "Please enter a valid URL for the image.",
            });
            return;
        }

        // Validate date
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
            Swal.fire({
                icon: "warning",
                title: "Invalid Date",
                text: "Pick-up date must be today or in the future.",
            });
            return;
        }

        const formData = {
            name,
            category,
            price,
            location,
            description,
            imageUrl,
            date,
            email,
        };

        axios.post('https://pawmart-backend-eight.vercel.app/listings', formData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Listing Added Successfully!",
                        html: `<p><strong>${name}</strong> has been added to <strong>${category}</strong>.</p>`,
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
            .catch(err => {
                // console.log(err);

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
    };

    return (
        <div className='my-10 mx-4'>
            <title>PawMart | Add Listing</title>
            <div className="container max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800">Add New Listing</h2>
                <p className='text-gray-800 mb-6'>Share pets for adoption or sell pet-related products.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Product/Pet Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Product/Pet Name
                        </label>
                        <input
                            type="text"
                            name="productName"
                            required
                            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                            placeholder="Enter product or pet name"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <select
                            name="category"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-600"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select a category</option>
                            <option value="Pet">Pet</option>
                            <option value="Food">Food</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Care Products">Care Products</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price (৳)
                        </label>
                        <input
                            type="number"
                            name="price"
                            min="0"
                            step="1"
                            defaultValue={0}
                            disabled={category === "Pet"}
                            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 ${category === "Pet" ? "bg-gray-100 cursor-not-allowed" : ""
                                }`}
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                            placeholder="Enter location"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows="4"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 "
                            placeholder="Enter description"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Image URL
                        </label>
                        <input
                            type="url"
                            name="imageUrl"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Pick Up Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                            onFocus={(e) => e.target.showPicker()}
                        />
                    </div>

                    {/* Email (Readonly) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            value={user.email}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed text-gray-700"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full inline-block text-center bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-102 mt-4"
                        >
                            Add Listing
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddListings;
