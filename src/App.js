
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import BackupUsers from './componensts/backupUsers';
import ListUsers from './componensts/ListUsers';
import { useUserList } from './hooks/userUserList';

function App() {
  const { data, isLoading } = useUserList()

  return (
    <div className="bg-slate-700 text-white gap-5 flex-col max-w-screen-lg flex items-center justify-start p-20 min-h-screen w-full">
      {isLoading && <p className='text-2xl text-red-600'>Loading...</p>}
      <h2 className='text-5xl text-green-400 font-bold'>Main Users List</h2>
      <ul className=''>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <ListUsers />
      <BackupUsers />
    </div>
  );
}

export default App;
