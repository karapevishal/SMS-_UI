import { Contact } from 'lucide-react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CommunityDetails from './CommunityDetails'
import Footer from './Footer'
import Header from './Header'
import Home from './home'
import MaintenanceDetails from './MaintenanceDetails'
import MaintenanceHistory from './MaintenanceHistory'
import Sidebar from './Sidebar'
import SocietyInfo from './SocietyInfo'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(s => !s)

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (toggles on/off) */}
        {isSidebarOpen && <Sidebar />}

        {/* Main content scrollable only */}
        <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <Routes>
            <Route path="/" element={<SocietyInfo />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/MaintenanceHistory" element={<MaintenanceHistory />} />
            <Route path="/communityDetails" element={<CommunityDetails />} />
            <Route path="/MaintenanceHistory/:id" element={<MaintenanceDetails />} />
          </Routes>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
