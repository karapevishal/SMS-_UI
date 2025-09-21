import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from '../slices/authSlice'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    const fakeToken = 'sampleToken123'
    dispatch(setToken(fakeToken))
    navigate('/dashboard')
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 animate-gradient-x'>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full relative z-10'>
        <div className='flex flex-col items-center mb-6'>
          <div className='w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-xl font-bold'>Logo</div>
          <h2 className='mt-4 text-2xl font-bold text-gray-700'>Welcome Back</h2>
        </div>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' className='w-full mb-4 px-4 py-2 border rounded-lg' />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password' className='w-full mb-4 px-4 py-2 border rounded-lg' />
        <button onClick={handleLogin} className='w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg'>Login</button>
        <p className='mt-4 text-center text-gray-600'>Don't have an account? <Link to='/register' className='text-blue-500 hover:underline'>Register</Link></p>
      </div>
    </div>
  )
}
