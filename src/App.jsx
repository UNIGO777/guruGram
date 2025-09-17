import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main'
import Login from './Pages/Login'
import MyProfile from './Pages/MyProfile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  )
}

export default App