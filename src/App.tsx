import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home.tsx'
import Zustand from './store/store.tsx'
import Logon from './components/Logging/Logon.tsx'
import Login from './components/Logging/Login.tsx'
import ForgotPassword from './components/Logging/ForgotPassword.tsx'
import Profile from './components/Profile/Profile.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/store" element={<Zustand />}/>
        <Route path="/logon" element={<Logon />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;
