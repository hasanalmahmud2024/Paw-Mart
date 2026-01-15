import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import ListingCard from '../../components/ListingCard/ListingCard';

const PetsNSupplies = () => {
    const [listings, setListings] = useState([]);
    const [category, setCategory] = useState('');
    const { loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`https://pawmart-backend-eight.vercel.app/listings?category=${category}`)
            .then(response => {
                // console.log(response);
                setListings(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching listings:', error);
                setLoading(false)
            });
    }, [category, setLoading]);

   if(loading){
    return <LoadingComponent></LoadingComponent>
   }


    return (
        <div className='my-10 max-w-7xl mx-auto min-h-screen px-6'>
            <title>PawMart | Pets & Supplies</title>
            <h2 className="text-5xl font-bold text-center my-10">Pets & Supplies</h2>

            <div className="w-[80vw] mx-auto flex justify-end gap-3">
                <select onChange={e => setCategory(e.target.value)} className="select appearance-none">
                    <option disabled={true}>Select a Category</option>
                    <option value="">All Category</option>
                    <option value="Pet">Pet</option>
                    <option value="Food">Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Care Products">Care Products</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
                
                {
                    listings?.map(listing => (
                        <ListingCard key={listing?._id} listing={listing} />
                    ))
                }
            </div>
        </div>
    );
};

export default PetsNSupplies;