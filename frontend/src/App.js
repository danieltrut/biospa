import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Header/Navbar";

import { Procedures } from "./Pages/Procedures";
import { About } from "./Pages/About";

// Global Colors

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Procedures />} />
          <Route path="about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
