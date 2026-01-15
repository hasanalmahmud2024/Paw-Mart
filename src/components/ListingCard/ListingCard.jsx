import React from 'react';
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const ListingCard = ({ listing }) => {
    const { _id, name, price, imageUrl, category, location } = listing;

    // console.log(service);

    return (
        <div
            className="rounded-lg shadow-lg hover:shadow-2xl flex flex-col cursor-pointer h-full transition transform hover:scale-102"
        >
            <img
                src={imageUrl}
                alt={name}
                className="h-64 w-full object-cover rounded-t-lg"
            />

            <div className="p-4 flex flex-col grow">
                <h3 className="text-xl font-semibold mb-1">
                    {name}
                </h3>
                <p className="text-gray-500 text-sm mb-1">
                    Location: {location}
                </p>

                <p className="font-semibold mt-2">
                    {price === 0
                        ? "For Adoption"
                        : `৳${price}`}
                </p>

                <Link
                    to={`/listing/${_id}`}
                    className=" inline-block text-center bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-102 mt-4"
                >
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default ListingCard;
