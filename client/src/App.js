import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/login';
import HomePage from './components/homepage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>} path='/api' default/>
          <Route element={<HomePage/>} path='/api/homepage'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
