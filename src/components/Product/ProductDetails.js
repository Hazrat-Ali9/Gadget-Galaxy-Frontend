import { addComponent } from "@/redux/features/pcbuild/pcbuildSlice";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";

const ProductDetails = ({
  id,
  productName,
  price,
  description,
  category,
  status,
  image,
  reviews,
  keyFeatures,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const addItemToBuild = () => {
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
  };

  return (
    <div className="heightFix px-6 lg:py-32 md:py-28 py-12 pb-20">
      <div className="max-w-screen-xl flex items-center mx-auto">
        <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
          {router.isFallback ? (
            <Skeleton width={400} height={400} />
          ) : (
            <div className="mx-auto">
              <Image
                src={image}
                alt=""
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>
          )}
          <div className="flex-grow xl:max-w-2xl lg:max-w-xl  md:max-w-md">
            {router.isFallback ? (
              <Skeleton count={12} />
            ) : (
              <>
                <h3 className="font-bold xl:text-4xl  lg:text-3xl text-2xl mb-2 capitalize">
                  {productName}
                </h3>
                <div className="flex gap-x-5 items-center mt-4">
                  <div className="font-normal bg-[#dddddd] p-2 rounded-full px-4 ">
                    <span className="font-semibold rounded-full inline-block text-black">
                      Status:
                    </span>
                    <span>{status}</span>
                  </div>
                  <div className="font-normal bg-[#dddddd] p-2 rounded-full px-4">
                    <span className="font-semibold rounded-full inline-block text-black">
                      Category:
                    </span>
                    <span>{category}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mt-6 mb-4 font-semibold">
                    Key Features
                  </h3>
                  <ul className="list-decimal list-inside">
                    {keyFeatures.map((feature, i) => (
                      <li key={i}>
                        <span className="font-semibold">
                          {feature.keyName}:
                        </span>
                        <span className="font-normal">{feature.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-justify text-sm lg:text-base my-6">
                  {description}
                </p>
                <p className="text-2xl font-semibold text-gray-700">
                  $ {price}
                </p>
                <div className="text-xs mt-5 line-clamp-2 text-gray-500 link">
                  {...Array(reviews)
                    .fill()
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        className="h-5 text-yellow-500 inline-block"
                      />
                    ))}
                </div>
                <div className="mt-5 flex xs:flex-row flex-col sm:gap-8 gap-6">
                  <button
                    className="button px-10  py-2 flex items-center justify-center"
                    onClick={addItemToBuild}
                  >
                    <ShoppingCartIcon className="w-4" />
                    <span className="ml-2">Add to Build </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
