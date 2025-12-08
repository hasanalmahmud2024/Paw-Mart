import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <title>Error 404</title>
            <div className="text-center max-w-md">
                <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
                <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
                <p className="text-lg mb-6 text-base-content/80">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>
                <Link to="/" className="btn btn-primary btn-wide">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default Error;