import Card from '@/components/Shared/AddToCart/Card';
import { useGetAddToCartProductsQuery } from '@/redux/features/addToCard/addToCard';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Index = () => {
    const router = useRouter()
    const {data, isLoading, isError, refetch} = useGetAddToCartProductsQuery()
    useEffect(() => {
        if (typeof window !== "undefined") {
            const accessToken = localStorage.getItem("accessToken");
            const refreshToken = localStorage.getItem("refreshToken");
            if (!accessToken && !refreshToken) {
                router.push('/sign-in');
            }
        }
    }, [router]);
    return (
        <div className='mt-20'>
            <Card item={data?.data} refetch={refetch} />
        </div>
    );
};

export default Index;