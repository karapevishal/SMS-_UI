import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'

export default function App() {
  const token = useSelector((s: RootState) => s.auth.token)
  return (
    <Routes>
      <Route path='/' element={!token ? <Login /> : <Navigate to='/dashboard' />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard/*' element={token ? <Dashboard /> : <Navigate to='/' />} />
    </Routes>
  )
}
