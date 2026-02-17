import React from 'react';

const LoadingComponent = () => {
    return (
        <div
            className="flex flex-col justify-center items-center gap-4 min-h-screen bg-base-100"
            aria-busy="true"
            aria-live="polite"
        >
            <span className="loading loading-spinner loading-lg "></span>
            <p className="text-lg font-medium ">Loading, please wait...</p>
        </div>
    );
};

export default LoadingComponent;