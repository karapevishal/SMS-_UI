import React from 'react'

export default function SocietyInfo() {
  return (
    <div className='bg-white rounded-lg shadow-lg p-6 relative'>
      <div className='absolute bottom-0 left-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-sm font-bold'>
        User
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-r from-pink-300 to-blue-300 text-white px-4 py-2 rounded-bl-lg animate-gradient-x'>
        Society Name
      </div>
      <p className='mt-20 text-gray-700'>This is society information content.</p>
    </div>
  )
}
