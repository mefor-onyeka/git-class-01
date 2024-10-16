import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginForm(e) {
    e.preventDefault();
    if (email ==='' || password ==='') {
        toast.error('Please fill in all fields', {position:"top-center", draggable: true, draggableDirection: "x"});
        return;
    }
    console.log(email, password);
    // Add your login logic here (e.g., call an API)
  }

  return (
    <div className='h-[80vh] flex items-center justify-center w-full'>
      <form onSubmit={loginForm} className='flex flex-col shadow-md shadow-blue-400 w-[30vw] items-center justify-center p-4 gap-4 rounded-md'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <span className='w-4/5 flex gap-4 items-center' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Username:</label>
          <input className='border border-gray-800 rounded-lg p-2' type="text" name="username" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </span>
        <span className='w-4/5 flex gap-4 items-center' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Password:</label>
          <input className='border border-gray-800 rounded-lg p-2' type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </span>
        <button className='py-2 px-6 rounded-md bg-blue-600 text-white hover:bg-blue-950 transition-shadow' type="submit">Login</button>
        <p className='pb-4'>Don't have an account? <Link to="/register"><span className='text-purple-700 cursor-pointer hover:text-purple-500'> Sign up</span></Link></p>
      </form>
    </div>
  )
}