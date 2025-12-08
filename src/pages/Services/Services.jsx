import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className='mt-10 mb-5 min-h-screen'>
            <title>PAWMART | All Services</title>
            <h2 className="text-5xl font-bold text-center mb-4">All Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-[90vw] mx-auto mb-10">
                {
                    services.map(service => (
                        <ServiceCard key={service.serviceId} service={service} />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;