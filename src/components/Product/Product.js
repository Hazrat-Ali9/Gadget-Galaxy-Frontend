import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

function Product({
  id,
  productName,
  price,
  description,
  category,
  status,
  image,
  reviews,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const addItemToBuild = () => {
    if (!session?.user?.email) {
      alert("Please Sign In to add items to your build");
      router.push("/api/auth/signin");
    } else {
      dispatch(
        addComponent({
          id,
          name: productName,
          price,
          category,
          image,
        })
      );
      router.push("/pc-builder");
    }
  };

  return (
    <div className="relative flex flex-col   bg-white z-20  md:p-8 p-6 rounded-md shadow-lg">
      <p className="absolute top-2 right-3 text-xs italic text-gray-400 capitalize">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        alt=""
        objectFit="contain"
        className="cursor-pointer"
        onClick={() => router.push(`/product-details/${id}`)}
      />
      <h4 className="my-3 link font-medium capitalize">
        <Link href={`/product-details/${id}`}>{productName}</Link>
      </h4>
      <p className="text-xs mb-2 line-clamp-2 text-gray-500 link">
        <Link href={`/product-details/${id}`}>{description}</Link>
      </p>
      <div className="flex items-center justify-between">
        <span className="mb-5 mt-2 font-bold text-gray-700">$ {price}</span>
        <span className="mb-5 mt-2 font-normal text-gray-700">{status}</span>
      </div>
      <div className="text-xs mb-2 line-clamp-2 text-gray-500 link">
        {...Array(reviews)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500 inline-block" />
          ))}
      </div>
      <button
        className="mt-auto button flex items-center justify-center"
        onClick={addItemToBuild}
      >
        <ShoppingCartIcon className="w-4" />
        <span className="ml-2">Add To Builder</span>
      </button>
    </div>
  );
}

export default Product;
