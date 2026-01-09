import React, { use, useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Services = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('');
    const { setLoading } = use(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:3000/services?category=${category}`)
            .then(response => {
                // console.log(response);
                setServices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false)
            });
    }, [category, setLoading]);

    return (
        <div className='mt-10 mb-5 min-h-screen'>
            <title>PAWMART | All Services</title>
            <h2 className="text-5xl font-bold text-center my-10">All Our Services</h2>

            <div className="w-[80vw] mx-auto flex justify-end gap-3">
                <select onChange={e=>setCategory(e.target.value)} className="select appearance-none">
                    <option disabled={true}>Select a Category</option>
                    <option value="">All Category</option>
                    <option value="Pets">Pets</option>
                    <option value="Food">Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Care Products">Care Products</option>
                </select>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-[90vw] mx-auto mb-10">
                {
                    services?.map(service => (
                        <ServiceCard key={service?._id} service={service} />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;