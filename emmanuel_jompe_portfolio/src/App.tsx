import "./App.css";
import React from "react";
import Footer from "./assets/Footer/Footer";
import Hero from "./assets/Hero/Hero";
import Navbar from "./assets/Navbar/Navbar";
import Projects from "./assets/Projects/Projects";
import Contact from "./assets/Contact/Contact";
import About from "./assets/About/About";
const App: React.FC = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
};

export default App;
