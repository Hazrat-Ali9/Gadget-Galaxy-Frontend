import React, { useState, useEffect } from 'react';
import { useGetUserProfileQuery, useUpdateProfileMutation } from '@/redux/features/auth/userAuth';
import { useRouter } from 'next/router';

const UserProfile = () => {
  const { data, isLoading, isError } = useGetUserProfileQuery();
  const [updateProfile, resInfo] = useUpdateProfileMutation()
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (data) {
      setUserData(data?.user);
    }
  }, [data]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
      const res = await updateProfile(userData)
      if (res) {
        setIsEditing(false);
      }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="mt-28 p-20">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData?.name || ''}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          ) : (
            <div>{userData?.name || ''}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userData.email || ''}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          ) : (
            <div>{userData.email || ''}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Phone:</label>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={userData.phone || ''}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          ) : (
            <div>{userData.phone || ''}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Address:</label>
          {isEditing ? (
            <textarea
              name="address"
              value={userData.address || ''}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            ></textarea>
          ) : (
            <div>{userData.address || ''}</div>
          )}
        </div>
        <div className="mt-4">
          {isEditing ? (
            <button
              onClick={handleSaveClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditClick}
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => router.push('/products/order')}
            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          >
            View Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
