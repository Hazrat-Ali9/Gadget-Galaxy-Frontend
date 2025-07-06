// import BuildProduct from "@/components/BuildProduct/BuildProduct";
// import { wrapper } from "@/redux/app/store";
// import categoriesApi from "@/redux/features/categories/categoriesApi";
// import { clearComponent } from "@/redux/features/pcbuild/pcbuildSlice";
// import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useDispatch, useSelector } from "react-redux";

// const PcBuilder = ({ categories }) => {
//   const router = useRouter();

//   const pcbuild = useSelector((state) => state.pcbuild);
//   const dispatch = useDispatch();
//   const findCurrentCategory = (category) => {
//     category = category?.replace(/\s+/g, "");
//     category = category?.toLowerCase();
//     return pcbuild[category];
//   };

//   return (
//     <>
//       <Head>
//         <title>PC Builder</title>
//       </Head>
//       <div className="bg-gray-100 py-10 md:px-6 heightFix">
//         <main className="max-w-screen-md mx-auto">
//           <div className="my-6 shadow rounded-md">
//             <div className="flex flex-col md:p-8  p-6  bg-white">
//               <div className="flex justify-between items-center border-b-2 border-gray-200 mb-5 pb-2">
//                 <h1 className="sm:text-2xl text-xl font-semibold pb-4 text-gray-700">
//                   PC BUILD
//                 </h1>
//                 <button
//                   onClick={() => dispatch(clearComponent())}
//                   className={`button-red py-2 px-2 xs:px-10`}
//                 >
//                   Clear
//                 </button>
//               </div>
//               {categories.map((category, i) => (
//                 <div
//                   key={category?.id}
//                   className="flex justify-between items-center mb-4"
//                 >
//                   {findCurrentCategory(category?.name)?.name ? (
//                     <BuildProduct
//                       id={findCurrentCategory(category?.name)?.id}
//                       productName={findCurrentCategory(category?.name)?.name}
//                       price={findCurrentCategory(category?.name)?.price}
//                       category={category?.name}
//                       image={findCurrentCategory(category?.name)?.image}
//                       border={i !== categories?.length - 1}
//                     />
//                   ) : (
//                     <>
//                       <h2>{category.name}</h2>
//                       <button
//                         className={`button py-2 lg:px-10 md:px-8 px-6`}
//                         onClick={() =>
//                           router.push(`/categories/${category?.name}`)
//                         }
//                       >
//                         Choose
//                       </button>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           {pcbuild?.qty === 0 ? (
//             <div className="flex items-center justify-center w-full  px-6 lg:py-20 sm:py-10 py-4">
//               <div className="text-center md:max-w-none sm:w-auto mx-auto max-w-xs w-4/5">
//                 <h3 className="lg:text-2xl text-xl font-medium mt-4">
//                   Your Build Is Empty
//                 </h3>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col bg-white md:p-10  py-8 px-6 shadow-md rounded-md md:text-xl sm:text-lg text-base my-10">
//               <h2 className="whitespace-nowrap font-semibold overflow-x-auto hideScrollBar">
//                 <span className="font-bold">
//                   Subtotal ({pcbuild?.qty} items) :
//                 </span>
//                 <span className="font-bold text-red-500 mx-2">
//                   ${pcbuild?.total}
//                 </span>
//               </h2>
//               <button
//                 role="link"
//                 className={`button mt-6 flex items-center justify-center lg:text-lg text-base py-2`}
//               >
//                 <ComputerDesktopIcon className="sm:w-6 w-5" />
//                 <span
//                   className="ml-2"
//                   onClick={() => {
//                     alert("Your Build has been successfully ordered");
//                     dispatch(clearComponent());
//                   }}
//                 >
//                   Complete Build
//                 </span>
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </>
//   );
// };

// export default PcBuilder;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const categories = await store.dispatch(
//       categoriesApi.endpoints.getCategories.initiate()
//     );

//     try {
//       return {
//         props: {
//           categories: categories.data,
//         },
//       };
//     } catch (error) {
//       console.log(error);
//       return {
//         notFound: true,
//       };
//     }
//   }
// );
import React from 'react';

const Index = () => {
  return (
    <div>
      
    </div>
  );
};

export default Index;