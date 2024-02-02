import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const [dropOverlay, setDropOverlay] = useState(false)

  useEffect(() => {
    setFadeIn(true)
    setDropOverlay(true)
  }, [])


  return (
    <div className="App" >
      <div className='overlay' style={{ height: dropOverlay ? "0" : "100svh" }}></div>
      <Navbar fadeIn={fadeIn} />
      <HomePage fadeIn={fadeIn} />
    </div>
  );
}

export default App;
