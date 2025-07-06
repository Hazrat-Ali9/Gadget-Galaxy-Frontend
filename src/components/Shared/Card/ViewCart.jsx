import React from 'react';
import { useRouter } from 'next/router';

const ViewCart = ({ item, deleteToCartItem }) => {
    const router = useRouter();
    const productDetails = (id) => {
        router.push(`/product/${id}`);
    };

    return (
        <div className="p-item shadow-2xl w-1/2 mx-auto lg:w-full h-full rounded-xl p-8 flex-1 max-w-1/4 flex flex-col justify-between">
            <div className="p-item-inner">
                <div className="p-item-img">
                    <button onClick={() => productDetails(item._id)}>
                        <img
                            src={item?.image}
                            alt={item?.image}
                            width="228"
                            height="228"
                            draggable={false}
                        />
                    </button>
                </div>
                <div className="p-item-details">
                    <h4 className="p-item-name">
                        <button onClick={() => productDetails(item._id)} className='bold text-center'>
                            {item?.name}
                        </button>
                    </h4>
                </div>
            </div>
            <div className="text-center text-red-600 pb-5">
                <span>${item?.price}</span>
            </div>
            <div className='flex flex-col justify-center w-full  gap-5'>
                <button onClick={()=> deleteToCartItem(item._id)} className="button lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-base flex items-center justify-center">Delete</button>
                {/* <button className="button lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-base flex items-center justify-center">Update</button> */}
            </div>
        </div>
    );
};

export default ViewCart;
