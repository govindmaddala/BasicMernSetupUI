import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Authentication/Login'
import PrivateRoute from './components/Authentication/PrivateRoute'
import Dashboard from './components/Home/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>}
        />
      </Routes>

    </div>
  )
}

export default App
