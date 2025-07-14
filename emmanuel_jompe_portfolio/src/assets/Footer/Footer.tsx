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

/*import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";*/
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Emmanuel Ayomiposi Jompe </h2>
          <p>Software Engineer | Cyber Security Specialist</p>
          <p>
            <FaLocationDot style={{ paddingRight: 2 }} /> Lagos, Nigeria
          </p>
          <p>
            <SiGmail style={{ paddingRight: 4 }} /> ayomiposiemmanuel9@gmail.com
          </p>
          <p>
            <FaPhone style={{ paddingRight: 4 }} />
            +234 807 145 5374
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/Hero.tsx">Home</a>
            </li>
            <li>
              <a href="/About.tsx">About</a>
            </li>
            <li>
              <a href="/Projects.tsx">Projects</a>
            </li>
            <li>
              <a href="/Contact.tsx">Contact</a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1wo3hSGebGm-vAe1Jue4WsoawoGf906q5/view?usp=drivesdk"
                download={"Jompe_Emmanuel_Resume"}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Socials</h3>
          <div className="social-icons">
            <a href="https://github.com/mojojompe">
              <SiGithub size={40} />
            </a>
            <a href="http://www.linkedin.com/in/emmanuel-jompe">
              <FaLinkedin size={40} />
            </a>
            <a href="mailto:">
              <SiGmail size={40} />
            </a>
            <a href="#">
              <MdWhatsapp size={40} />
            </a>
            <a href="#">
              <FaInstagram size={40} />
            </a>
            <a href="#">
              <FaTwitter size={40} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Emmanuel Jompe | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
