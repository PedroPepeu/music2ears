import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home.tsx'
import Zustand from './store/store.tsx'
import Header from './components/Template/Header/Header.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Zustand />}/>
        <Route path="/header" element={<Header />}/>
      </Routes>
    </Router>
  );
}

export default App;
