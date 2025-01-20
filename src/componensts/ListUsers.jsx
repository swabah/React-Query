import React from 'react'
import { useUseListMutation, useUserList } from '../hooks/userUserList'

function ListUsers() {
    const { data } = useUserList()
    const { mutate } = useUseListMutation()
    return (
        <div className='w-full text-center'>
            <h2 className='mt-5 text-5xl text-green-400 font-bold'>Users List</h2>
            <button className='mt-5  bg-white px-4 py-2 rounded text-black font-bold' onClick={() => mutate()}>Add User</button>
            <ul className='mt-10'>
                {data?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListUsers