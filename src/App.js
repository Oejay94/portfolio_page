import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './Pages/homePage';
import ResumePage from './Pages/resumePage';
import Header from './Layout/Header';
import NavBar from './Layout/NavBar';
import Footer from './Layout/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path='/resume' element={<ResumePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
