import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import SocietyInfo from './SocietyInfo'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(s => !s)

  return (
    <div className='flex h-screen flex-col'>
      <Header toggleSidebar={toggleSidebar} />
      <div className='flex flex-1'>
        {isSidebarOpen && <Sidebar />}
        <main className='flex-1 p-4 overflow-y-auto'>
          <Routes>
            <Route path='/' element={<SocietyInfo />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}
