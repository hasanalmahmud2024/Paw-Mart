import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';

const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
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
        }
        console.log(formData);
        axios.post('http://localhost:3000/services', formData)
        .then(res=> {
            console.log(res);
        })

    }


    return (
        <div className='my-10 mx-4'>
            <div className="container max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Pet/Product Submission</h2>
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Product/Pet Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Product/Pet Name
                        </label>
                        <input
                            type="text"
                            name="productName"
                            // value={formData.productName}
                            // onChange={handleInputChange}
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
                            // value={formData.category}
                            // onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-600"
                        >
                            <option value="">Select a category</option>
                            <option value="Pets">Pets</option>
                            <option value="Food">Food</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Care Products">Care Products</option>
                        </select>
                    </div>


                    {/* Price Field - Conditionally Disabled */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            name="price"
                            // value={formData.price}
                            // onChange={handleInputChange}
                            // disabled={formData.category === 'Pets'}
                            min="0"
                            step="0.01"
                            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600`
                                // ${formData.category === 'Pets' ? 'bg-gray-100 cursor-not-allowed': 'bg-white'}
                            }
                        // placeholder={formData.category === 'Pets' ? 'Not applicable for pets' : 'Enter price'}
                        />
                        {/* {formData.category === 'Pets' && (
                            <p className="mt-1 text-sm text-blue-600">Price is not applicable for pets and has been set to $0.</p>
                        )} */}
                    </div>


                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            // value={formData.location}
                            // onChange={handleInputChange}
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
                            // value={formData.description}
                            // onChange={handleInputChange}
                            rows="4"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
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
                            // value={formData.imageUrl}
                            // onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>


                    {/* Pick Up Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Pick Up Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            // value={formData.date}
                            // onChange={handleInputChange}
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
                            value={user?.email || ''}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed text-gray-700"
                        />
                    </div>


                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            // disabled={!formData.productName || !formData.category || !formData.location || !formData.description || !formData.imageUrl || !formData.date}
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;