import { useState, useEffect } from "react";
import "./Navbar.css";
import { Menu02Icon } from "hugeicons-react";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-glass-bg"></div>
      <div className="nav-wrap">
        <div className="nav-logo">
          <img src="/LogoWhite.png" alt="Logo" />
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li>
            <a
              className="resume-btn"
              href="https://docs.google.com/document/d/1Hgg03Y3pvteZj3MMnOugyqTlt5RyNIyv/edit?usp=drive_link&ouid=104087193776407225339&rtpof=true&sd=true"
              target="_blank"
            >Resume</a>
          </li>
        </ul>

        <button className="menu-btn" onClick={toggleMenu}>
          {open ? <MdClose size={32} /> : <Menu02Icon size={32} color={"#000000"} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
