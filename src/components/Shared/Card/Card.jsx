import React, { useEffect, useState } from 'react';
import KeyFeatures from './KeyFeatures';
import { useRouter } from 'next/router';
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
    const productDetails = (id) => {
        router.push(`/product/${id}`);
    };
    const buyNowProduct = async (item) => {
        if (user) {
            //    console.log(item);
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
        <div className="p-item  shadow-2xl h-full rounded-xl p-8 w-1/2 mx-auto lg:w-full flex-1 max-w-1/4 flex flex-col justify-between sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4">
            <div className="p-item-inner">
                <div className="p-item-img text-center">
                    <button onClick={() => productDetails(item._id)}>
                        <img
                            draggable={false}
                            src={item?.image}
                            alt={item?.image}
                            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto"
                        />
                    </button>
                </div>
                <div className="p-item-details">
                    <h4 className="p-item-name">
                        <button
                            onClick={() => productDetails(item._id)}
                            className="font-bold text-center"
                        >
                            {item?.name}
                        </button>
                    </h4>
                    <div className="text-center">
                        {item?.keyFeatures?.map((feature, featureIndex) => (
                            <KeyFeatures key={featureIndex} item={feature} />
                        ))}
                    </div>
                    <div className="text-center text-red-600 pb-5">
                        <span>${item?.price}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col  rounded mt-20 gap-5">
                {resInfo.isLoading ? <button className="flex border px-4 py-3 items-center justify-center gap-2" type="button">
                    <Loader />
                </button> :
                    <button onClick={()=> buyNowProduct (item)} className="flex items-center border px-4 py-3 justify-center gap-2" type="button">
                        <i className="material-icons">shopping_cart</i> Buy Now
                    </button>}
            </div>
        </div>

    );
};

export default Card;
