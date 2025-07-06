import { useGetAllProductQuery } from "@/redux/features/productFeather/products";
import Categories from "../Categories/Categories";
import LoadingSpinner from "../Shared/Loading/LoadingSpinner";
import { useEffect } from "react";
import { useState } from "react";
import HomePageCard from "../Shared/Card/HomePageCard";
function ProductFeed() {
  const { data, isLoading, refetch } = useGetAllProductQuery();
  const [randomProducts, setRandomProducts] = useState([]);
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  useEffect(() => {
    if (data) {
      const shuffledProducts = shuffleArray(data.data).slice(0, 20);
      setRandomProducts(shuffledProducts);
    }
  }, [data]);

  return (
    <div className="">
      <div className="w-full py-20 bg-gray-100 mt-10" id="products-feed">
          <Categories />


        <div className="pt-20">
          <h2 className="text-center capitalize text-2xl font-semibold ">
            Featured Products
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Check & Get Your Desired Product!
          </p>
          <div>
            {isLoading ? <LoadingSpinner /> : <div className='grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8'>
              {
                randomProducts?.map((item) => <>
                  <HomePageCard item={item} />
                </>)
              }
            </div>}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeed;
