import React from "react";
import { ReactLenis, useLenis } from 'lenis/react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import CourseReg from "./pages/CourseReg";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Project from "./pages/Project";

function App() {
  const location = useLocation();

  useLenis(({ scroll }) => {
    // console.log(scroll); // current scroll value
  });


  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,          // lower = smoother
        duration: 1.2,      // scroll duration in seconds
        smoothWheel: true,  // smooth mouse wheel scrolling
        smoothTouch: false, // you can enable if you want smooth touch scroll
      }}
    >
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/course/registration/:id" element={<CourseReg />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </AnimatePresence>
    </ReactLenis>
  );
}

export default App;
