
import { useGetAllUserQuery } from '@/redux/features/auth/userAuth';
import React from 'react';
import { useState } from 'react';
import RoleChangeModal from './RoleChangeModal';
import DeleteUser from './DeleteUser';
import LoadingSpinner from '../Shared/Loading/LoadingSpinner';

const ViewAllUserf = () => {
    const { data, isLoading, isError, refetch } = useGetAllUserQuery();
    const [userRoleChange, setUserRoleChange] = useState(false)
    const [deleteUser, setDeleteUser] = useState(false)
    const [user, setUser] = useState()
    return (
        <div>
            {isLoading ? <LoadingSpinner /> : <div className='pt-36 pb-20 px-20'>
                <table className="min-w-full text-xs">
                    <colgroup>
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3 bg-gray-200 text-lg">User Name</th>
                            <th className="p-3 bg-gray-200 text-lg">User Email</th>
                            <th className="p-3 bg-gray-200 text-lg">Role</th>
                            <th className="p-3 mr-5 bg-gray-200 text-right  text-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((item) => <>
                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <p>{item?.firstName} {item?.lastName}</p>
                                </td>
                                <td className="p-3">
                                    <p>{item?.email}</p>
                                </td>
                                <td className="p-3">
                                    <p>{item?.role}</p>
                                </td>
                                <td className="p-3 text-right flex justify-end gap-2">
                                    <button onClick={() => {
                                        setUserRoleChange(true)
                                        setUser(item)
                                    }} className='bg-gray-200 p-3 rounded font-bold'>
                                        Change User Role
                                    </button>
                                    <button onClick={() => {
                                        setDeleteUser(true)
                                        setUser(item)
                                    }} className='bg-gray-200 p-3 rounded font-bold'>
                                        Delete User
                                    </button>
                                </td>
                            </tr>
                        </>)}
                    </tbody>
                </table>
                <div>
                    {
                        userRoleChange && <RoleChangeModal refetch={refetch} user={user} setUserRoleChange={setUserRoleChange} />
                    }
                    {
                        deleteUser && <DeleteUser refetch={refetch} user={user} setDeleteUser={setDeleteUser} />
                    }
                </div>
            </div>}
        </div>
    );
};

export default ViewAllUserf;