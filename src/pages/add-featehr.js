import { PostImage } from '@/components/ImageBB/imageUpload';
import { useAddFeatherMutation } from '@/redux/features/productFeather/productFeather';
import { useState } from 'react';

const FeatherPosting = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [addFeather, resCreateFeather] = useAddFeatherMutation()

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const imageUrl = await PostImage(file);
    setSelectedImage(file);
    setImage(imageUrl);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
      }
    }, 100);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      featherName: e.target.featherName.value,
      featherPhoto: image,
      dis: e.target.description.value,
    };
    e.target.reset();
    setSelectedImage();
    await addFeather(data)
  };
  return (
    <div className="h-screen -mb-20 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Yo
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="featherName" className="block text-gray-600">Feather Name</label>
            <input
              type="text"
              id="featherName"
              className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Enter the feather name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600">Upload Feather Image</label>
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
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">Description</label>
            <textarea
              id="description"
              className="w-full resize-none border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-400"
              rows="4"
              placeholder="Tell us about your feather..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover-bg-blue-600 text-white p-2 rounded-md w-full transition-colors"
          >
            Post Feather
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeatherPosting;
