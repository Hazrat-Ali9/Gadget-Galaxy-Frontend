import ViewCart from '@/components/Shared/Card/ViewCart';
import LoadingSpinner from '@/components/Shared/Loading/LoadingSpinner';
import { useDeleteToProductMutation, useGetAllProductQuery } from '@/redux/features/productFeather/products';
import React from 'react';
import toast from 'react-hot-toast';

const Index = () => {
    const { data, isLoading, refetch } = useGetAllProductQuery();
    const [deleteToCart, resInfo] = useDeleteToProductMutation()

    const deleteToCartItem = async (id) => {
        await deleteToCart(id)
        await refetch()
        toast.error("Yah..! Delete successfully");
    }
    return (
        <div className='mt-40 mb-10'>
            {isLoading ? <LoadingSpinner /> : <div className='grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8'>
                {
                    data.data?.map((item) => <>
                        <ViewCart deleteToCartItem={deleteToCartItem} item={item} />
                    </>)
                }
            </div>}

        </div>
    );
};

export default Index;