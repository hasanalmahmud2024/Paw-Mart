import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const ServiceDetails = () => {
    const [service, setService] = useState();
    const { setLoading } = use(AuthContext);
    const { id } = useParams();

    // const { name, price, imageUrl, date, category, createdAt, description, email, location,  } = service || {};


    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
            .then(response => {
                setService(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false);
            });
    }, [id, setLoading]);

    // console.log(service)

    return (
        <div>
            <title>WARM PAWS | {service?.name}</title>
            <div className="hero bg-base-200 min-h-screen pb-16 ">
                <div className="hero-content flex-col mx-4 md:mx-16 lg:mx-[145px]">
                    <img
                        src={service?.imageUrl}
                        className="max-w-[80vw] md:max-w-lg max-h-96 object-cover rounded-lg shadow-2xl my-8"
                    />
                    <div className='space-y-2'>
                        <h1 className="text-4xl font-bold">{service?.name}</h1>
                        <p className="py-6">{service?.description}</p>
                        <div className="badge badge-outline badge-warning">{service?.category}</div>
                        <div className="text-primary font-semibold flex items-center gap-1">
                            <span> {service?.date}</span>
                        </div>
                        <p className=" ">Provider: {service?.name}</p>
                        <p className=" ">Contact: {service?.email}</p>
                        <p className=" font-bold">Price: ${service?.price}</p>

                        <button className="btn btn-primary mb-10">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;