import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 min-h-[75vh]'>
            <span className="loading loading-spinner text-primary"></span>
            <span className='font-bold'>Please wait!</span>
        </div>
    );
};

export default LoadingSpinner;