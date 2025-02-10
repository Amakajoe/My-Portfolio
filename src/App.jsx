import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
    </div>
  );
}

export default App;
