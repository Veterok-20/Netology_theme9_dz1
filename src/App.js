import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import Menu from './components/Menu';

function App() {

  return (
      <div>
        <Menu />
        <div className="page">
        <Routes>  
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="*" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>   
  )
}

export default App;
