import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const skills = [
    "Full-Stack Developer",
    "Mobile Application Developer",
    "ML and AI Engineer",
    "Cyber Security Specialist"
  ];

  const heroRef = useRef(null);
  const bgRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Crafting scalable systems and innovative solutions. Bridging the gap between complex backend logic and intuitive frontend experiences.";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    // Parallax Effect
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <header id="hero" className="site-hero" ref={heroRef}>
      <div className="hero-bg" ref={bgRef} style={{ backgroundImage: `url('/Official.jpg')` }}></div>
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <div className="hero-content" data-aos="fade-up">

          <h1 className="hero-name">
            Emmanuel Ayomiposi Jompe
          </h1>

          <div className="rotating-skills">
            <span className="static-text"></span>
            <span key={skillIndex} className="dynamic-text">
              {skills[skillIndex]}
            </span>
          </div>

          <p className="hero-blurb">
            {typewriterText}
            <span className="cursor">|</span>
          </p>

          <div className="hero-actions">
            <a
              className="cta-primary"
              href="https://drive.google.com/file/d/1wo3hSGebGm-vAe1Jue4WsoawoGf906q5/view"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
            <a className="cta-secondary" href="#contact">
              Connect with Me
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </header>
  );
};

export default Hero;
