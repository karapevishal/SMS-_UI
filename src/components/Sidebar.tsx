import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className='w-64 bg-gray-100 shadow-lg h-full p-4'>
      <ul className='space-y-4'>
        <li><Link to='/dashboard'>Society Info</Link></li>
      </ul>
    </aside>
  )
}
