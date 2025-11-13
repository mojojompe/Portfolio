import "./About.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaJava, FaLeaf, FaNetworkWired, FaTerminal } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import {
  SiAmazonwebservices,
  SiCplusplus,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGnubash,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNativescript,
  SiNodedotjs,
  SiPython,
  SiR,
  SiReact,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="me-about">
      <div className="about-wrap">
        <div className="about-left">
          <h2 className="section-title">Overview</h2>
          <p className="lead">
            I build modern, reliable web and mobile applications — bridging
            design and functionality. I deliver end-to-end solutions: polished
            front-ends, robust backends, and scalable systems.
          </p>

          <div className="service-grid">
            <article className="feature">
              <FaTerminal size={36} color="#058789" />
              <div>
                <h3>Software Engineering</h3>
                <p>Creation and management of modern software systems.</p>
              </div>
            </article>

            <article className="feature">
              <MdDevices size={36} color="#058789" />
              <div>
                <h3>Cross-Platform Development</h3>
                <p>Web, mobile and desktop apps with great UX.</p>
              </div>
            </article>

            <article className="feature">
              <FaNetworkWired size={36} color="#058789" />
              <div>
                <h3>Networking & Security</h3>
                <p>Setup, monitoring & vulnerability management.</p>
              </div>
            </article>

            <article className="feature">
              <FaChalkboardTeacher size={36} color="#058789" />
              <div>
                <h3>Tutoring</h3>
                <p>Personalized software development training.</p>
              </div>
            </article>
          </div>
        </div>

        <aside className="about-right">
          <h2 className="section-title small">My Tech Stack</h2>

          <div className="stack-grid">
            <div className="stack-col">
              <h4>Frontend</h4>
              <div className="icons">
                <SiHtml5 size={32} color="#058789" />
                <SiCss3 size={32} color="#058789" />
                <SiJavascript size={32} color="#058789" />
                <SiTypescript size={32} color="#058789" />
              </div>
            </div>

            <div className="stack-col">
              <h4>Backend</h4>
              <div className="icons">
                <SiDjango size={32} color="#058789" />
                <FaLeaf size={32} color="#058789" />
                <SiNodedotjs size={32} color="#058789" />
                <SiExpress size={32} color="#058789" />
                <SiMongodb size={32} color="#058789" />
                <SiFirebase size={32} color="#058789" />
              </div>
            </div>

            <div className="stack-col">
              <h4>Languages</h4>
              <div className="icons">
                <FaJava size={32} color="#058789" />
                <SiPython size={32} color="#058789" />
                <SiCplusplus size={32} color="#058789" />
                <SiR size={32} color="#058789" />
              </div>
            </div>

            <div className="stack-col">
              <h4>Frameworks</h4>
              <div className="icons">
                <SiReact size={32} color="#058789" />
                <SiRedux size={32} color="#058789" />
                <SiExpo size={32} color="#058789" />
                <SiNativescript size={32} color="#058789" />
              </div>
            </div>

            <div className="stack-col">
              <h4>DevOps</h4>
              <div className="icons">
                <SiAmazonwebservices size={32} color="#058789" />
                <SiDocker size={32} color="#058789" />
                <SiGooglecloud size={32} color="#058789" />
                <SiGnubash size={32} color="#058789" />
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Projects Section */}
      <div className="projects-section" id="projects">
        <h2 className="section-title">Projects</h2>

        {/* Medicare */}
        <div className="projects-grid">
          <div className="proj-media">
            <img src="/Medicare.png" alt="medicare" />
          </div>
          <div className="proj-card">
            <small className="proj-tag">MediCare</small>
            <h3>Digital healthcare platform</h3>
            <p>
              Built with TypeScript, React and Node.js, Medicare bridges the gap
              between healthcare providers and patients, simplifying healthcare
              services.
            </p>
            <a href="https://medicare-home.vercel.app" className="proj-link">
              View Project →
            </a>
          </div>
        </div>

        {/* Campus Tech */}
        <div className="projects-grid reverse">
          <div className="proj-card">
            <small className="proj-tag">Campus Tech Group</small>
            <h3>Community platform</h3>
            <p>
              Built the frontend of a student collaboration portal using HTML,
              CSS and JavaScript.
            </p>
            <a
              href="https://group3project-beige.vercel.app"
              className="proj-link"
            >
              View Project →
            </a>
          </div>
          <div className="proj-media">
            <img src="/CampusTech.png" alt="campusTech" />
          </div>
        </div>

        {/* Eduplanner */}
        <div className="projects-grid">
          <div className="proj-media">
            <img src="/Eduplanner.jpg" alt="eduplanner" />
          </div>
          <div className="proj-card">
            <small className="proj-tag">EduPlanner</small>
            <h3>Student productivity app</h3>
            <p>
              A cross-platform mobile app built with React Native, Node.js and
              MongoDB to help students organize tasks and boost productivity.
            </p>
            <a href="https://edu-planner-home.vercel.app" className="proj-link">
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
