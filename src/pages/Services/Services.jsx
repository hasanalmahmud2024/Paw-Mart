import React, { use, useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Services = () => {
    const [services, setServices] = useState();
    const { setLoading } = use(AuthContext);

    useEffect(() => {
        axios.get('http://localhost:3000/services')
            .then(response => {
                // console.log(response);
                setServices(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false)
            });
    }, [setLoading]);

    return (
        <div className='mt-10 mb-5 min-h-screen'>
            <title>PAWMART | All Services</title>
            <h2 className="text-5xl font-bold text-center mb-4">All Our Services</h2>
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