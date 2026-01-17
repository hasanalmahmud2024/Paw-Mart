import React, { useContext, useEffect, useState } from 'react';
import Slider from '../../components/Slider/Slider';
import { Link } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Categories from '../../components/Categories/Categories';
import ListingCard from '../../components/ListingCard/ListingCard';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';

const Home = () => {
    const [listings, setListings] = useState();
    const { loading, setLoading } = useContext(AuthContext);


    useEffect(() => {
        axios.get('https://pawmart-backend-eight.vercel.app/listings?limit=6')
            .then(response => {
                // console.log(response);
                setListings(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching listings:', error);
                setLoading(false);
            });
    }, [setLoading]);

    // console.log(listings)
    


    return (
        <div className='max-w-7xl mx-auto'>
            <title>PawMart | Home</title>
            <Slider></Slider>
            <Categories></Categories>

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Recent Listings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 my-10">
                { 
                    listings?.map(listing => (
                        <ListingCard key={listing._id} listing={listing} />
                    ))
                }
            </div>
            
            <Link to={'/pets-supplies'} className='flex justify-center mt-32 mb-10'>
                <button className="btn btn-wide btn-xl inline-block text-center bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition transform hover:shadow-2xl hover:scale-105">
                    All Pets & Supplies
                </button>
            </Link>


        </div>
    );
};

export default Home;