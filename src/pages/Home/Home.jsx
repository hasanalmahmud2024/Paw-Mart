import React from 'react';
import Slider from '../../components/Slider/Slider';
import { Link, useLoaderData } from 'react-router';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ExpertVets from '../../components/ExpertVets/ExpertVets'
import WinterCareTips from '../../components/WinterTips/WinterTips';

const Home = () => {
    const services = useLoaderData();


    return (
        <div className=''>
            <title>PAWMART | Home</title>
            <div className='mt-5 mb-18'>
                <Slider></Slider>
            </div>
            <h2 className="text-5xl font-bold text-center mb-4">Popular Winter Care Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-[90vw] mx-auto mb-10">
                {/* {
                    services.slice(0, 6).map(service => (
                        <ServiceCard key={service.serviceId} service={service} />
                    ))
                } */}
            </div>
            <Link to={'/services'} className='flex justify-center mb-28'>
                <button className="btn btn-primary btn-wide btn-xl">
                    See All Services
                </button>
            </Link>

            <ExpertVets></ExpertVets>
            <WinterCareTips></WinterCareTips>

        </div>
    );
};

export default Home;