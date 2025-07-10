import React from 'react'
import './About.css'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { FaNetworkWired, FaTerminal } from 'react-icons/fa6'
import { MdDevices } from 'react-icons/md'
const About = () => {
  return (
    <section className="me-about">
      <div className="about-head">
        <h2 className="about-us-h2">Overview</h2>
      </div>

      <div className="container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaTerminal size={40} color="#058789" />
              <h3>Software Engineering</h3>
              <p>
                Provides modern and affordable creation and management of software systems and best practices 
              </p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <MdDevices size={40} color="#058789" />
              <h3>Cross-Platform Development</h3>
              <p>
                Provides Web, Mobile and Desktop Software Platforms. Get Mobile Apps, Websites and Portals  
              </p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaNetworkWired size={40} color="#058789" />
              <h3>Networking and CyberSecurity</h3>
              <p>
                Creates, Monitors and Manages Networks, Detects and Corrects Vulnerability and Cyber Threats 
              </p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaChalkboardTeacher color="#058789" size={40} />
              <h3>Tutoring</h3>
              <p>
                Provides personalized help with coding, software development, and
                other tech-related subjects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-head">
        <h2 className="about-us-h2">Frameworks</h2>
        
      </div>
    </section>
  );
}

export default About
