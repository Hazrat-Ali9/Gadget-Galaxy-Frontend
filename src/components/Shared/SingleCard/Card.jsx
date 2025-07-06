import React from 'react';
import KeyFeatures from './KeyFeatures';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAddToCartProductMutation } from '@/redux/features/addToCard/addToCard';
import { toast } from 'react-hot-toast';
import Loader from '../Loader/Loader';

const Card = ({ item }) => {
    const router = useRouter();
    const [user, setUser] = useState(false);
    const [addToCartProduct, resInfo] = useAddToCartProductMutation()
    useEffect(() => {
        if (typeof window !== "undefined") {
            const user = localStorage.getItem("user");
            setUser(user)
        }
    }, [router]);
    const buyNowProduct = async () => {
        if (user) {
            const data = {
                id: item._id,
                quantity: 1,
            }
           await addToCartProduct(data)
            toast.success("The product add successfully in you cart..!");
        } else {
            router.push('/sign-in')
        }
    }


    return (
        <div>
            <div className=" shadow-2xl  rounded-xl p-8  mt-20 flex-1 w-full">
                <div className="grid px-10 grid-cols-1 lg:grid-cols-2 w-full">
                    <div className="">
                        <div>
                            <img
                                src={item?.image}
                                alt={item?.image}
                                width="500"
                                height="500"
                                draggable={false}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <h4 className="">
                            <div className='bold py-10 uppercase text-3xl text-center'>
                                {item?.name}
                            </div>
                        </h4>

                        <div className="text-lg">
                            {item?.keyFeatures?.map((feature, featureIndex) => (
                                <KeyFeatures key={featureIndex} item={feature} />
                            ))}
                        </div>
                        <div className="text-center text-xl py-3 text-red-600 pb-5">
                            <span>${item?.price}</span>
                        </div>
                        <div className="flex flex-col  rounded mt-20 gap-5">
                            {resInfo.isLoading ? <button onClick={buyNowProduct} className="flex border px-4 py-3 items-center justify-center gap-2" type="button">
                                <Loader />
                            </button> :
                                <button onClick={buyNowProduct} className="flex items-center border px-4 py-3 justify-center gap-2" type="button">
                                    <i className="material-icons">shopping_cart</i> Buy Now
                                </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;