// import { SearchIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);

//   const closeSearch = () => {
//     setSearchTerm("");
//   };

//   useEffect(() => {
//     function handleClickOutside(e) {
//       let targetEl = e.target;
//       do {
//         if (targetEl === searchRef.current) {
//           return;
//         }
//         targetEl = targetEl.parentNode;
//       } while (targetEl);
//       closeSearch();
//     }
//     window.addEventListener("click", handleClickOutside);
//     return () => {
//       window.removeEventListener("click", handleClickOutside);
//     };
//   }, []);


  return (
    <div className="relative flex rounded-md  items-center" ref={searchRef}>
      <div className="absolute inset-y-0 left-2.5 flex items-center">
        {/* <SearchIcon className="w-4 text-gray-600" /> */}
      </div>
      <input
        className="p-2 pl-10 h-full flex-grow flex-shrink outline-none cursor-pointer sm:text-base text-sm rounded-lg bg-gray-200"
        type="text"
        value={searchTerm}
        placeholder="Search a product"
        onChange={(e) => setSearchTerm(e.target.value)}
        // onChange={searchProduct}
      />

      {/* {searchTerm ? (
        <div className="absolute w-full h-auto sm:max-h-96 max-h-80 top-11 rounded-md bg-gray-100 overflow-y-auto shadow-md hideScrollBar">
          {!isLoading || !loading ? (
            searchResults?.length ? (
              searchResults.map(({ item: { _id, title, image } }, i) => 
                  <div
                    onClick={() => {
                      closeSearch();
                      router.push(`/product-details/${_id}`);
                    }}
                    className={`flex cursor-pointer items-center justify-between lg:px-5 py-2  px-4  ${
                      i !== searchResults.length
                        ? "border-b  border-gray-200"
                        : ""
                    } bg-gray-50 hover:bg-gray-100`}
                  >
                    <h5 className="text-sm text-gray-700 pr-4 capitalize">
                      {title}
                    </h5>
                    <div className="min-w-max">
                      <Image
                        src={image}
                        height={40}
                        width={40}
                        alt=""
                        objectFit="contain"
                      />
                    </div>
                  </div>
              ))
            ) : (
              <p className="text-xs text-gray-500 text-center py-4">
                No product found
              </p>
            )
          ) : (
            <p className="text-xs text-gray-500 text-center py-4">Loading...</p>
          )}
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
}

export default Search;
