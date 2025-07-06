import Image from 'next/image';
import React from 'react';
import FeedFrom from './FeedFrom';

const FeedbackForm = () => {
    return (
        <div className='p-10 '>
            <div className='flex max-w-screen-xl flex-col gap-2 py-10'>
                <h className="text-4xl font-bold text-center p-3">Feedback Form</h>
                <h4 className='text-center md:px-40'>Please provide a brief description of your feedback</h4>
            </div>
            <div className='grid md:grid-cols-2'>
                <div className='flex justify-center w-full h-full items-center'>
                    <img
                        src={'https://res.cloudinary.com/dhvuyehnq/image/upload/v1697723185/kowvt3prcl15acim8hn0.gif'}
                        alt='feedback image'
                        draggable={false}
                    />
                </div>
                <div>
                    <FeedFrom />
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;