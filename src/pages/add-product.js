import { PostImage } from '@/components/ImageBB/imageUpload';
import { useGetFeatherQuery } from '@/redux/features/productFeather/productFeather';
import { useAddProductsMutation } from '@/redux/features/productFeather/products';
import { useState } from 'react';

const PostProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLink, setImageLink] = useState();
  const [addProducts, resInfo] = useAddProductsMutation()
  const { data: productFeather, isLoading, isError } = useGetFeatherQuery()
  const [uploadProgress, setUploadProgress] = useState(0);
  const [productData, setProductData] = useState({
    name: '',
    dis: '',
    image: imageLink,
    price: '',
    regPrice: '',
    productCode: '',
    brand: '',
    status: 'in_stock',
    feather: 'drone',
    keyFeatures: [{ key: '', feature: '' }],
  });

  const handleInputChange = (e, index, field) => {

    const { value, name } = e.target;

    if (index !== null) {
      const updatedKeyFeatures = [...productData.keyFeatures];
      updatedKeyFeatures[index][field] = value;
      setProductData({ ...productData, keyFeatures: updatedKeyFeatures });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const addKeyFeaturePair = () => {
    setProductData({
      ...productData,
      keyFeatures: [...productData.keyFeatures, { key: '', feature: '' }],
    });
  };

  const removeKeyFeaturePair = (index) => {
    const updatedKeyFeatures = [...productData.keyFeatures];
    updatedKeyFeatures.splice(index, 1);
    setProductData({ ...productData, keyFeatures: updatedKeyFeatures });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredData = productData.keyFeatures.filter(item => item.key !== "" || item.feature !== "");

    const cleanedData = { ...productData, keyFeatures: filteredData };
    cleanedData.image = imageLink
    addProducts(cleanedData)
    setProductData(
      {
        name: '',
        dis: '',
        image: imageLink,
        price: '',
        regPrice: '',
        productCode: '',
        brand: '',
        status: 'in_stock',
        feather: '',
        keyFeatures: [{ key: '', feature: '' }],
      }
    )
    setImageLink()
    setSelectedImage()
  };



  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedImage(file);
    const imageUrl = await PostImage(file);
    setImageLink(imageUrl)
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen  pt-36 pb-20 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-4/5">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add a Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={productData?.name}
              onChange={(e) => handleInputChange(e, null, 'name')}
              className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Product Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dis" className="block text-gray-600">
              Description
            </label>
            <textarea
              id="dis"
              name="dis"
              required
              value={productData.dis}
              onChange={(e) => handleInputChange(e, null, 'dis')}
              className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-400"
              rows="4"
              placeholder="Product Description"
            />
          </div>
          <div className="mb-10">
            <label htmlFor="image" className="block text-gray-600">Upload Product Image</label>
            <label
              htmlFor="image"
              className="w-full border-2 border-dashed border-gray-300 p-4 rounded-md cursor-pointer hover:bg-gray-100 transition duration-300"
            >
              {selectedImage ? (
                <div>
                  <img
                   draggable={false}
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Feather"
                    className="w-full h-36 object-cover rounded-md"
                  />
                  {uploadProgress < 100 && (
                    <div className="mt-2">
                      <div className="bg-blue-500 h-2 w-full rounded-md">
                        <div className="bg-blue-600 h-2" style={{ width: `${uploadProgress}%` }} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-center">Drag & drop an image or click to select</p>
              )}
            </label>
            <input
              type="file"
              required
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                type="number"
                required
                id="price"
                name="price"
                value={productData.price}
                onChange={(e) => handleInputChange(e, null, 'price')}
                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Price"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="regPrice" className="block text-gray-600">
                Regular Price
              </label>
              <input
                type="number"
                id="regPrice"
                name="regPrice"
                required
                value={productData.regPrice}
                onChange={(e) => handleInputChange(e, null, 'regPrice')}
                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Regular Price"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="productCode" className="block text-gray-600">
                Product Code
              </label>
              <input
                type="text"
                required
                id="productCode"
                name="productCode"
                value={productData.productCode}
                onChange={(e) => handleInputChange(e, null, 'productCode')}
                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Product Code"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="brand" className="block text-gray-600">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                required
                name="brand"
                value={productData.brand}
                onChange={(e) => handleInputChange(e, null, 'brand')}
                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus-border-blue-400"
                placeholder="Brand"
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-4 mb-4">
            <div className='mb-4 '>
              <label htmlFor="status" className="block text-gray-600">
                Status
              </label>
              <select
                id="status"
                
                name="status"
                value={productData.status}
                onChange={(e) => handleInputChange(e, null, 'status')}
                className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus-border-blue-400"
              >
                <option value="in_stock">In Stock</option>
                <option value="out_of_stock">Out of Stock</option>
              </select>
            </div>
            <div className='mb-4'>
              <label htmlFor="feather" className="block text-gray-600">
                Feather
              </label>
              <select
                id="feather"
                name="feather"
                value={productData.feather}
                onChange={(e) => handleInputChange(e, null, 'feather')}
                className="w-full border-2 uppercase border-gray-300 p-2 rounded-md focus:outline-none focus-border-blue-400"
              >

                {
                  productFeather?.data?.map((item) => <option key={item._id} className='uppercase' value={item.dis}>{item.dis}</option>)

                }
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">
              Key Features
            </label>
            {productData.keyFeatures.map((keyFeature, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  name="key"
                  value={keyFeature.key}
                  onChange={(e) => handleInputChange(e, index, 'key')}
                  className="w-1/2 border-2 border-gray-300 p-2 rounded-md focus:outline-none focus-border-blue-400"
                  placeholder="Key"
                />
                <input
                  type="text"
                  name="feature"
                  value={keyFeature.feature}
                  onChange={(e) => handleInputChange(e, index, 'feature')}
                  className="w-1/2 ml-2 border-2 border-gray-300 p-2 rounded-md focus:outline-none focus-border-blue-400"
                  placeholder="Feature"
                />
                <button
                  type="button"
                  onClick={() => removeKeyFeaturePair(index)}
                  className="ml-2 p-2 text-red-500 hover:text-red-700 focus:outline-none"
                >
                  -
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addKeyFeaturePair}
              className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              + Add Key Feature
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md w-full transition-colors"
          >
            Post Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostProduct;
