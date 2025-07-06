import { useDeleteUserMutation } from '@/redux/features/auth/userAuth';
import React from 'react';
import { useEffect } from 'react';

const DeleteUser = ({ setDeleteUser, user , refetch }) => {
    const [deleteUser, resInfo] = useDeleteUserMutation()

    const deleteUserFun = () =>{ 
        deleteUser(user?._id)
    }

    useEffect(()=> {
        if (resInfo?.isSuccess) {
            setDeleteUser(false)
            refetch()
        }
    },[resInfo, setDeleteUser, refetch])

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
                                        setDeleteUser(false)
                                    }}
                                    className="font-bold p-2 text-xl btn btn-sm btn-circle absolute right-2 top-2"
                                >
                                    ✕
                                </button>
                                <h3 className="font-bold text-slate-500 my-3 text-center text-[23px]">
                                    Are you sure! You Detele The user
                                </h3>
                            </div>
                            <div>
                                <button onClick={deleteUserFun} className="w-full button border-0 lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-base flex items-center justify-center">Delete User</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;