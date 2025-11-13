import "./Footer.css";
import { FaPhone } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <h2>Emmanuel Ayomiposi Jompe</h2>
          <p>Software Engineer • Cyber Security Specialist</p>

          <div className="footer-info">
            <div><FaLocationDot /> Lagos, Nigeria</div>
            <div><SiGmail /> ayomiposiemmanuel9@gmail.com</div>
            <div><FaPhone /> +234 807 145 5374</div>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="https://drive.google.com/file/d/1wo3hSGebGm-vAe1Jue4WsoawoGf906q5/view">
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-socials">
          <h3>Socials</h3>
          <div className="social-row">
            <a href="https://github.com/mojojompe"><SiGithub /></a>
            <a href="http://www.linkedin.com/in/emmanuel-jompe"><FaLinkedin /></a>
            <a href="mailto:"><SiGmail /></a>
            <a href="https://wa.me/2348071455374"><MdWhatsapp /></a>
            <a href="https://www.instagram.com/emmanuel_jompe/"><FaInstagram /></a>
            <a href="https://twitter.com/EmmanuelJompe"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Emmanuel Jompe — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
