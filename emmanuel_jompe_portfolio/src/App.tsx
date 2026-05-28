import "./App.css";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./assets/Navbar/Navbar";
import Hero from "./assets/Hero/Hero";
import About from "./assets/About/About";
import AboutMe from "./assets/AboutMe/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./assets/Contact/Contact";
import Footer from "./assets/Footer/Footer";
import Chatbot from "./components/Chatbot";
import GithubActivity from "./components/GithubActivity";
import TechNews from "./components/TechNews/TechNews";
import ProjectDetail from "./pages/ProjectDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function PortfolioHome() {
  return (
    <>
      <Hero />
      <AboutMe />
      <About />
      <GithubActivity />
      <Projects />
      <Experience />
      <TechNews />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    // Initialize Global Smooth Scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle Anchor Links for Smooth Scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = link.getAttribute("href")!;
        if (id === "#") {
          lenis.scrollTo(0);
        } else {
          const element = document.querySelector(id);
          if (element) {
            lenis.scrollTo(element as HTMLElement);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="app-container">
      {location.pathname === "/" && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
