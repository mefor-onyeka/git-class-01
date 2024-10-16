import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [username, setUsername] = useState('');

  function signUp(e) {
    e.preventDefault();
    if (email === '' || password === '' || confirmPassword === '' || username === '') {
      toast.error('Please fill in all fields', { position: "top-center", draggable: true, draggableDirection: "x" });
      return
    }
    if (confirmPassword != password) {
        toast.error('Passwords do not match', { position: "top-center", draggable: true, draggableDirection: "x" });
      
    }
    if (!email.includes('@')){
        toast.error('Invalid email', { position: "top-center", draggable: true, draggableDirection: "x"})
    }
    console.log(email, password);
    navigate("/")
  }

  return (
    <div className='h-[80vh] flex items-center justify-center w-full'>
      <form onSubmit={signUp} action='' className='flex flex-col shadow-md shadow-blue-400 w-[40vw] items-center justify-center p-4 gap-4 text-center rounded-md'>
        <h1 className='text-2xl font-bold'>Register</h1>
        <span className='w-4/5 flex gap-4 items-center' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Username:</label>
          <input className='border border-gray-800 rounded-lg p-2 w-3/5' type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </span>
        <span className='w-4/5 flex gap-4 items-center' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Email:</label>
          <input className='border border-gray-800 rounded-lg p-2 w-3/5' type="text" name="email" placeholder="eg. JohnDoe@yahoo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </span>
        <span className='w-4/5 flex gap-4 items-center'style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Password:</label>
          <input className='border border-gray-800 rounded-lg p-2 w-3/5' type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </span>
        <span className='w-4/5 flex gap-4 items-center' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label>Confirm Password:</label>
          <input className='border border-gray-800 rounded-lg p-2 w-3/5' type="password" name="confirm-password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </span>
        <button className='py-2 px-6 rounded-md bg-blue-600 text-white hover:bg-blue-950 transition-shadow' type="submit">Sign up</button>
        <p className='pb-4'>Already have an account? <Link to="/login"><span className='text-purple-700 cursor-pointer hover:text-purple-500'> Sign in</span></Link></p>
      </form>
    </div>
  )
}