import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./assets/Footer/Footer";
import Hero from "./assets/Hero/Hero";
import Navbar from "./assets/Navbar/Navbar";
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
        <div className="slide-in">
          <Navbar />
          <Hero />
          <About />
          <Contact />
          <Footer />
        </div>
        </>
      )}
    </>
  );
};

export default App;
