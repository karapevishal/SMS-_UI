import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className='w-64 bg-gray-100 shadow-lg h-full p-4 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 animate-gradient-x'>
      <ul className='space-y-1'>
        <div className="group relative flex gap-x-1 rounded-lg p-4  hover:bg-sky-400 border border-gray-500" ><div>
            <li className="font-semibold text-gray-700 dark:text-gray-500 rounded-xs 
"><Link to='/home'>Home</Link></li>
          </div>
        </div>
        <div className="group relative flex gap-x-1 rounded-lg p-4  hover:bg-sky-400 border border-gray-500" ><div>
            <li className="font-semibold text-gray-700 dark:text-gray-500 rounded-xs 
"><Link to='/dashboard'>Society Details</Link></li>
          </div>
        </div>
        <div className="group relative flex gap-x-1 rounded-lg p-4  hover:bg-sky-400 border border-gray-500" ><div>
            <li className="font-semibold text-gray-700 dark:text-gray-500 rounded-xs 
"><Link to='/dashboard'>Contact Details</Link></li>
          </div>
        </div>
      </ul>
    </aside>
  )
}
