import { useState } from "react";
import "./Navbar.css";
import { MdMenu } from "react-icons/md";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/LogoBlack.png" alt="logo" />
      </div>
      <div className="nav-center">
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/Hero.tsx">Home</a>
          <a href="/About.tsx">About</a>
          <a href="/Projects.tsx">Projects</a>
          <a href="/Contacts.tsx">Contact</a>
        </div>
      </div>
      <MdMenu
        size={40}
        color="#058789"
        className="landing-menu-toggle"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
