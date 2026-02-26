import "./Footer.css";
import { FaPhone, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { FaLocationDot, FaSnapchat } from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="site-footer" data-aos="fade-in">
      <div className="footer-bg-image" style={{ backgroundImage: `url('/Official.jpg')` }}></div>
      <div className="footer-overlay"></div>

      <div className="footer-inner">
        <div className="footer-brand">
          <h2>Emmanuel Jompe</h2>
          <p className="footer-role">Software Engineer • Cyber Security Specialist</p>
          <p className="footer-desc">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li className="icon-link"><SiGmail /> ayomiposiemmanuel9@gmail.com</li>
              <li className="icon-link"><FaPhone /> +234 807 145 5374</li>
              <li className="icon-link"><FaLocationDot /> Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/mojojompe" target="_blank" rel="noreferrer"><SiGithub /></a>
          <a href="http://www.linkedin.com/in/emmanuel-jompe" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/2348071455374" target="_blank" rel="noreferrer"><MdWhatsapp /></a>
          <a href="https://twitter.com/EmmanuelJompe" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.snapchat.com/emmanuelmojo1/" target="_blank" rel="noreferrer"><FaSnapchat /></a>
          <a href="https://www.instagram.com/emmanuel_jompe/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Emmanuel Jompe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
