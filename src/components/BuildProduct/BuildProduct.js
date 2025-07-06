import { clearComponentByCategory } from "@/redux/features/pcbuild/pcbuildSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

function BuildProduct({
  id,
  productName,
  price,
  category,
  image,
  border,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const removeItemFromBuild = () => {
    dispatch(clearComponentByCategory(category));
  };

  return (
    <div
      className={`block bg-white py-6 sm:grid sm:grid-cols-5 ${
        border ? "border-b border-gray-300" : ""
      }`}
    >
      <div className="text-center sm:text-left my-auto">
        <Image
          src={image}
          width={150}
          height={150}
          objectFit="contain"
          className="cursor-pointer"
          alt={productName}
          onClick={() => router.push(`/product-details/${id}`)}
        />
      </div>

      {/* Middle */}
      <div className="col-span-3 sm:p-4 mt-2 mb-6 sm:my-0">
        <h4 className="mb-3 link lg:text-xl md:text-lg text-base capitalize font-medium">
          <Link href={`/product-details/${id}`}>{productName}</Link>
        </h4>
        <p className="text-md mb-2 line-clamp-2 text-gray-600 link">
          <Link href={`/categories/${category}`}>{category}</Link>
        </p>
      </div>

      {/* Buttons on the right of the products */}
      <div className="flex flex-col space-y-4 my-auto justify-self-end">
        <button
          className={`button bg-red-600 py-2 lg:px-10 md:px-8 px-6 flex justify-center items-center`}
          onClick={removeItemFromBuild}
        >
          <XMarkIcon className="h-5" />
        </button>
      </div>
    </div>
  );
}

export default BuildProduct;
