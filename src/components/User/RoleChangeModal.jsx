import { useUpdateUserRoleMutation } from '@/redux/features/auth/userAuth';
import React, { useState } from 'react';
import { useEffect } from 'react';

const RoleChangeModal = ({ setUserRoleChange , user, refetch}) => {
    const [updateUserRole, resInfo] = useUpdateUserRoleMutation()
    const [selectedRole, setSelectedRole] = useState(user?.role);

    const handleRoleChange = (e) => {
      setSelectedRole(e.target.value);
    };
    const handleUserRoleChangeFn = ()=>{
        updateUserRole({
            role: selectedRole.toString(),
            id: user?._id
        })
        
    }
    useEffect(()=> {
        if (resInfo?.isSuccess) {
            setUserRoleChange(false)
            refetch()
        }
    },[resInfo, setUserRoleChange, refetch])
    return (
        <div>
            <div>
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className="fixed inset-0 backdrop-blur-sm"></div>
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="bg-[#f5f5f5] relative w-[400px] p-10 rounded-lg shadow-lg">

                            <div className="">

                                <button
                                    onClick={() => {
                                        setUserRoleChange(false)
                                    }}
                                    className="font-bold p-2 text-xl btn btn-sm btn-circle absolute right-2 top-2"
                                >
                                    ✕
                                </button>
                                <h3 className="font-bold text-slate-500 my-3 text-center text-[23px]">
                                    Are you sure! You Change the user Role
                                </h3>
                            </div>
                            <div>
                                <div className="w-64 rounded-xl  px-4 py-10 m-4 border border-gray-300">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Select Role:</label>
                                    <select
                                        className="block w-full border rounded-md py-2 px-3 text-gray-700 bg-white"
                                        value={selectedRole}
                                        onChange={handleRoleChange}
                                    >
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                    </select>
                                </div>
                                <button onClick={handleUserRoleChangeFn} className="w-full button border-0 lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-base flex items-center justify-center">Change User Role</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleChangeModal;