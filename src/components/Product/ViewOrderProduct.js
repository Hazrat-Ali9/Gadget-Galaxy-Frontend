import React from 'react';

const ViewOrderProduct = ({ setViewOrderPage, item }) => {
    return (
        <div>
            <div className='fixed inset-0 flex items-center justify-center z-50'>
                <div className="fixed inset-0 backdrop-blur-sm"></div>
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-[#f5f5f5] w-[400px] p-4 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                        </div>
                        <div className="line-clamp-3">
                            <img
                                src={item?.img}
                                alt={item?.img}
                                width="100%"
                                height="70"
                                draggable={false}
                            />
                        </div>
                        <div className="mt-4 flex justify-end">
                        <button onClick={()=> setViewOrderPage(false)} className="button lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-base flex items-center justify-center">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewOrderProduct;