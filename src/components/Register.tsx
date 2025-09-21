import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 animate-gradient-x'>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full relative z-10'>
        <div className='flex flex-col items-center mb-6'>
          <div className='w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center text-white text-xl font-bold'>Logo</div>
          <h2 className='mt-4 text-2xl font-bold text-gray-700'>Create Account</h2>
        </div>
        <input placeholder='Username' className='w-full mb-4 px-4 py-2 border rounded-lg' />
        <input placeholder='Email' className='w-full mb-4 px-4 py-2 border rounded-lg' />
        <input placeholder='Password' type='password' className='w-full mb-4 px-4 py-2 border rounded-lg' />
        <button className='w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg'>Register</button>
        <p className='mt-4 text-center text-gray-600'>Already have an account? <Link to='/' className='text-blue-500 hover:underline'>Login</Link></p>
      </div>
    </div>
  )
}
