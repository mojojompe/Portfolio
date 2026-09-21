import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CardNav from './components/ui/CardNav/CardNav';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import PhotoWall from './components/PhotoWall/PhotoWall';
import About from './components/About/About';
import GithubActivity from './components/GithubActivity/GithubActivity';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import TechNews from './components/TechNews/TechNews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

import './index.css';

const NAV_ITEMS = [
  {
    label: 'About',
    bgColor: '#efede6',
    textColor: '#1a1917',
    links: [
      { label: 'About Me', href: '#about-me', ariaLabel: 'About Me' },
      { label: 'Tech Stack', href: '#about', ariaLabel: 'Tech Stack' },
      { label: 'GitHub Activity', href: '#github-activity', ariaLabel: 'GitHub Activity' },
    ],
  },
  {
    label: 'Work',
    bgColor: '#d5cfc3',
    textColor: '#1a1917',
    links: [
      { label: 'Projects', href: '#projects', ariaLabel: 'Projects' },
      { label: 'Experience', href: '#experience', ariaLabel: 'Experience' },
    ],
  },
  {
    label: 'Connect',
    bgColor: '#1a1917',
    textColor: '#fafaf8',
    links: [
      { label: 'Tech News', href: '#tech-news', ariaLabel: 'Tech News' },
      { label: 'Contact Me', href: '#contact', ariaLabel: 'Contact' },
    ],
  },
];

const HomePage = () => {
  return (
    <>
      <CardNav
        logo="/LogoBlack.png"
        logoAlt="Emmanuel Jompe"
        items={NAV_ITEMS}
        baseColor="#fafaf8"
        menuColor="#1a1917"
        buttonBgColor="#1a1917"
        buttonTextColor="#fafaf8"
        ctaLabel="Download CV"
        ctaHref="https://drive.google.com/file/d/1wo3hSGebGm-vAe1Jue4WsoawoGf906q5/view"
      />
      <main>
        <Hero />
        <AboutMe />
        <PhotoWall />
        <About />
        <GithubActivity />
        <Projects />
        <Experience />
        <TechNews />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // AOS
    AOS.init({
      duration: 750,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    });

    return () => { lenis.destroy(); };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
