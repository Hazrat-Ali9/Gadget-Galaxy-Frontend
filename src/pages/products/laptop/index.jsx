import { useGetFeatherProductQuery } from '@/redux/features/productFeather/products';
import React, { useEffect } from 'react';
import Card from '@/components/Shared/Card/Card';
import LoadingSpinner from '@/components/Shared/Loading/LoadingSpinner';
import { useState } from 'react';

const Index = () => {

    const [routePath, setRoutePath] = useState()

    useEffect(() => {
        const pathSegments = window.location.pathname.split('/');
        const lastSegment = pathSegments[pathSegments.length - 1];
        setRoutePath(lastSegment);
      }, []);

    const { data, isLoading, refetch } = useGetFeatherProductQuery({
        feather: routePath
    })

    return (
        <div className='py-8 mt-28'>
            {isLoading ? <LoadingSpinner /> : <div className='grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8'>
                {
                    data?.data?.map((item) => <>
                        <Card item={item} />
                    </>)
                }
            </div>}

        </div>
    );
};

export default Index;