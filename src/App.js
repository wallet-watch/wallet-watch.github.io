import './App.css';
import React from 'react';
import Home from './routes/Home';
import Features from './routes/Features'
import About from './routes/About'
import ScrollToTop from './components/ScrollToTop';

import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className='container'>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
