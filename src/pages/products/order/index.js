import Order from '@/components/Product/Order';
import { useGetOrderProductQuery } from '@/redux/features/addToCard/addToCard';
import React from 'react';

const Index = () => {
    const {data, isLoading, isError} = useGetOrderProductQuery() 
    console.log(data);
    return (
        <div>
            <div className='flex flex-col mt-32 justify-center'>
                {
                    data?.data.map((data, i)=> <>
                    <Order item={data} i={i} />
                    </>)
                }
            </div>
        </div>
    );
};

export default Index;