import './About.css'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { FaJava, FaLeaf, FaNetworkWired, FaTerminal } from 'react-icons/fa6'
import { MdDevices } from 'react-icons/md'
import { SiAmazonwebservices, SiCplusplus, SiCss3, SiDjango, SiDocker, SiExpo, SiExpress, SiFirebase, SiGnubash, SiGooglecloud, SiGooglecloudstorage, SiHtml5, SiJavascript, SiMongodb, SiNativescript, SiNodedotjs, SiPython, SiR, SiReact, SiRedis, SiRedux, SiTypescript } from 'react-icons/si'
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
                Provides modern and affordable creation and management of
                software systems and best practices
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
                Provides Web, Mobile and Desktop Software Platforms. Get Mobile
                Apps, Websites and Portals
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
                Creates, Monitors and Manages Networks, Detects and Corrects
                Vulnerability and Cyber Threats
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
                Provides personalized help with coding, software development,
                and other tech-related subjects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-head">
        <h2 className="about-us-h2">My Tech Stack</h2>
      </div>

      <div className="container-stack">
        <div className="container-stack-items">
          <h3 className="about-us-h3">Front-end</h3>
          <div className="frameworks-grid">
            <SiHtml5 size={50} color="#058789" />
            <SiCss3 size={50} color="#058789" />
            <SiJavascript size={50} color="#058789" />
            <SiTypescript size={50} color="#058789" />
          </div>
        </div>

        <div className="container-stack-items">
          <h3 className="about-us-h3">Back-end</h3>
          <div className="frameworks-grid">
            <SiDjango size={50} color="#058789" />
            <FaLeaf size={50} color="#058789" />
            <SiNodedotjs size={50} color="#058789" />
            <SiExpress size={50} color="#058789" />
            <SiMongodb size={50} color="#058789" />
            <SiRedis size={50} color="#058789" />
            <SiFirebase size={50} color="#058789" />
          </div>
        </div>

        <div className="container-stack-items">
          <h3 className="about-us-h3">Languages</h3>
          <div className="frameworks-grid">
            <FaJava size={50} color="#058789" />
            <SiPython size={50} color="#058789" />
            <SiCplusplus size={50} color="#058789" />
            <SiR size={50} color="#058789" />
          </div>
        </div>

        <div className="container-stack-items">
          <h3 className="about-us-h3">Frameworks</h3>
          <div className="frameworks-grid">
            <SiExpo size={50} color="#058789" />
            <SiNativescript size={50} color="#058789" />
            <SiReact size={50} color="#058789" />
            <SiRedux size={50} color="#058789" />
          </div>
        </div>

        <div className="container-stack-items">
          <h3 className="about-us-h3">DevOps</h3>
          <div className="frameworks-grid">
            <SiAmazonwebservices size={50} color="#058789" />
            <SiDocker size={50} color="#058789" />
            <SiGooglecloud size={50} color="#058789" />
            <SiGnubash size={50} color="#058789" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About
