import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import ListingCard from "../../components/ListingCard/ListingCard";
import Swal from "sweetalert2";

const CategoryFilteredProducts = () => {
    const { categoryName } = useParams();
    const [listings, setListings] = useState([]);
    const { setLoading, loading } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`https://pawmart-backend-eight.vercel.app/listings?category=${categoryName}`)
            .then((res) => {
                setListings(res.data);
                setLoading(false);
            })
            .catch((err) => {
                // console.log(err);
                let errorMessage = "Something went wrong!";
                if (err.response) {
                    errorMessage = err.response.data.message || errorMessage;
                } else if (err.request) {
                    errorMessage = "No response from the server. Please try again.";
                }
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                });
            });
    }, [categoryName, setLoading]);

    if (loading) {
        return <div className="text-center py-16">Loading products...</div>;
    }

    return (
        <div className="py-16">
            <title>PawMart | Category Filtered Product </title>

            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Category: {categoryName}
                </h2>

                {listings.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No listings found in this category.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {listings.map((listing) => (
                            <ListingCard key={listing?._id} listing={listing} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryFilteredProducts;
