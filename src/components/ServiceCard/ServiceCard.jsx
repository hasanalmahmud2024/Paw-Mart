import React from 'react';
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { serviceId, serviceName, rating, price, image } = service;

    return (
        <div data-aos="flip-right" className="card justify-center bg-base-100 md:max-w-76 shadow-md hover:shadow-xl transition flex-1">
            <figure className="px-4 pt-10">
                <img
                    src={image}
                    alt={serviceName}
                    className="w-full h-64 object-cover rounded-xl"
                />
            </figure>

            <div className="card-body justify-center">
                <h2 className="card-title text-xl font-semibold">
                    {serviceName}
                </h2>
                <div className="card-actions justify-end mt-2 pr-1">
                    <p className="text-primary font-semibold flex items-center gap-1">
                        <FaStar className="text-yellow-500" /> {rating}
                    </p>
                    <p className="text-right font-bold text-gray-500">${price}</p>
                </div>

                <div className="card-actions mt-4">
                    <Link to={`/services/${serviceId}`}>
                        <button className="btn btn-primary btn-md w-full">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
