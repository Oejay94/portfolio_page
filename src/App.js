import React from "react";
import HomePage from "./Pages/homePage";
import ResumePage from "./Pages/resumePage";
import Header from "./Layout/Header";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";

import "./App.css";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <HomePage />
      <Footer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
};

export default App;
