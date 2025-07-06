import { useGetFeatherQuery } from "@/redux/features/productFeather/productFeather";
import { useRouter } from "next/router";
import React from "react";

const Categories = () => {
  const router = useRouter()
  const { data: productFeather, isLoading, isError } = useGetFeatherQuery()
  const opneProduct = (item)=>{
    router.push(`products/${item.dis}`);
  }
  return (
    <div className="">
      <div className="pb-10">
        <h2 className="text-center capitalize pb-[5px] text-[20px] leading-[26px] font-semibold ">
          Featured Category
        </h2>
        <p className="text-[15px] text-center text-[#01132d] leading-[26px] font-normal">Get Your Desired Product from Featured Category!</p>
      </div>

      <div className="flex justify-center w-full">
        <div className="grid grid-flow-row-dense grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8">
          {productFeather?.data?.map((item, i) => (
            <button
            onClick={()=>opneProduct(item)}
              key={`category-${i}`}
              className="w-[150px] flex flex-col px-5 py-5 gap-2 items-center m-2 bg-white rounded-xl shadow-2xl"
            >
              <div className="w-1/3">
                <img  draggable={false} src={item.featherPhoto} className="w-[60px]" alt={item.featherName} />
              </div>
              <div>
              <h2>{item.featherName}</h2>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Categories;
