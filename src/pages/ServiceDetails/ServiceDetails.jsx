import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router';

const ServiceDetails = () => {
    const services = useLoaderData();
    const { id } = useParams(); // {id: 'string'}

    const service = services.find(service => service.serviceId === parseInt(id))
    const { category, description, image, price, providerEmail, providerName, rating, serviceName, slotsAvailable } = service;
    const totalStars = 5;

    return (
        <div>
            <title>WARM PAWS | {serviceName}</title>
            <div className="hero bg-base-200 min-h-screen pb-16 ">
                <div className="hero-content flex-col mx-4 md:mx-16 lg:mx-[145px]">
                    <img
                        src={image}
                        className="max-w-[80vw] md:max-w-lg max-h-96 object-cover rounded-lg shadow-2xl my-8"
                    />
                    <div className='space-y-2'>
                        <h1 className="text-4xl font-bold">{serviceName}</h1>
                        <p className="py-6">{description}</p>
                        <div className="badge badge-outline badge-warning">{category}</div>
                        <div className="text-primary font-semibold flex items-center gap-1">
                            {[...Array(totalStars)].map((_, i) => {
                                const isFull = i < Math.floor(rating);
                                const isHalf = i === Math.floor(rating) && rating % 1 >= 0.5;
                                return isFull ? (
                                    <FaStar key={i} className="text-yellow-500" />
                                ) : isHalf ? (
                                    <FaStarHalfAlt key={i} className="text-yellow-500" />
                                ) : (
                                    <FaRegStar key={i} className="text-yellow-500" />
                                );
                            })} <span> {rating}</span>
                        </div>
                        <p className=" ">Provider: {providerName}</p>
                        <p className=" ">Contact: {providerEmail}</p>
                        <p className=" font-bold">Price: ${price}</p>

                        <p>Slots Available: {slotsAvailable}</p>
                        <button className="btn btn-primary mb-10">Book Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;