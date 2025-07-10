import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./assets/Footer/Footer";
import Hero from "./assets/Hero/Hero";
import Navbar from "./assets/Navbar/Navbar";
import Projects from "./assets/Projects/Projects";
import Contact from "./assets/Contact/Contact";
import About from "./assets/About/About";
import Splash from "./assets/Splash/Splash";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
