import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss';
import Reiseziele from './seiten/Reiseziele';
import About from './seiten/About';
import Kontakt from './seiten/Kontakt';
import Home from './seiten/Home';
import Header from './container/Header/Header'
import Footline from './container/Footline/Footline';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/reiseziele' element={<Reiseziele />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/kontakt' element={<Kontakt />} />
        </Routes>
        <Footline />
      </BrowserRouter>
    </div >
  );
}

export default App;
