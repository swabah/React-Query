import React from 'react'
import { useUserList } from '../hooks/userUserList'

function BackupUsers() {
    const { data } = useUserList()
    return (
        <div className='w-full text-center'>
            <h2 className='text-5xl text-green-400 font-bold'>BackupUsers List</h2>
            <ul className='mt-10'>
                {data?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default BackupUsers