import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LPU from './pages/LPU';
import Amity from './pages/Amity';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lpu" element={<LPU />} />
          <Route path="/amity" element={<Amity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
