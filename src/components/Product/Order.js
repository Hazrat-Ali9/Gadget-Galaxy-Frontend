import React from 'react';
import ViewOrderProduct from './ViewOrderProduct';
import { useState } from 'react';

const Order = ({ item, i }) => {
    const [viewOrderPage, setViewOrderPage] = useState(false)
    return (
        <div className=''>
            <div className='shadow-xl rounded border my-5 mx-20'>
                <div className='border grid grid-cols-2 p-5'>
                    <div>
                        <h3>Order# {i}</h3>
                        <h3>
                            Date Added: {item.created_at}
                        </h3>
                    </div>
                    <div className='md:flex justify-end px-10'>
                        <h3 className='font-semibold'>Status</h3>
                    </div>
                </div>
                <div className='grid md:grid-cols-2'>
                    <div className='flex items-center gap-5 px-10 py-5'>
                        <img
                            src={item?.img}
                            alt={item?.img}
                            width="70"
                            height="70"
                            draggable={false}
                        />
                        <h3>{item?.name}</h3>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-32 justify-end px-10 py-5'>
                        <h4 className='text-[#ef4a23] text-2xl' >${item?.price}</h4>
                        <button onClick={() => setViewOrderPage(true)} className="button lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-base flex items-center justify-center">View</button>
                    </div>
                </div>
            </div>
            <div>
                {viewOrderPage && <ViewOrderProduct item={item} setViewOrderPage={setViewOrderPage} />}
            </div>
        </div>
    );
};

export default Order;