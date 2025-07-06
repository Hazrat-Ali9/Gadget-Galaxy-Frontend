import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div className="w-20 h-20 border-t-4 border-blue-500 border-solid rounded-full animate-spin">
            </div>
        </div>
    );
};

export default LoadingSpinner;
