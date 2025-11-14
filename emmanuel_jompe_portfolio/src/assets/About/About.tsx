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
      </div>

      <aside className="about-right">
        <h2 className="section-title">My Tech Stack</h2>

        <div className="stack-grid">
          <div className="stack-col">
            <h4>Frontend</h4>
            <div className="icons">
              <SiHtml5 size={45} color="#058789" />
              <SiCss3 size={45} color="#058789" />
              <SiJavascript size={45} color="#058789" />
              <SiTypescript size={45} color="#058789" />
            </div>
          </div>

          <div className="stack-col">
            <h4>Backend</h4>
            <div className="icons">
              <SiDjango size={45} color="#058789" />
              <FaLeaf size={45} color="#058789" />
              <SiNodedotjs size={45} color="#058789" />
              <SiExpress size={45} color="#058789" />
              <SiMongodb size={45} color="#058789" />
              <SiFirebase size={45} color="#058789" />
            </div>
          </div>

          <div className="stack-col">
            <h4>Languages</h4>
            <div className="icons">
              <FaJava size={45} color="#058789" />
              <SiPython size={45} color="#058789" />
              <SiCplusplus size={45} color="#058789" />
              <SiR size={45} color="#058789" />
            </div>
          </div>

          <div className="stack-col">
            <h4>Frameworks</h4>
            <div className="icons">
              <SiReact size={45} color="#058789" />
              <SiRedux size={45} color="#058789" />
              <SiExpo size={45} color="#058789" />
              <SiNativescript size={45} color="#058789" />
            </div>
          </div>

          <div className="stack-col">
            <h4>Dev-Ops</h4>
            <div className="icons">
              <SiAmazonwebservices size={45} color="#058789" />
              <SiDocker size={45} color="#058789" />
              <SiGooglecloud size={45} color="#058789" />
              <SiGnubash size={45} color="#058789" />
            </div>
          </div>
        </div>
      </aside>

      {/* Projects Section */}
      <div className="projects-section" id="projects">
        <h2 className="section-title">Projects</h2>

        {/* OutbreakIQ */}
        <div className="projects-grid reverse">
          <div className="proj-media">
            <img src="/OutbreakIQ.png" alt="Outbreakiq" />
          </div>
          <div className="proj-card">
            <small className="proj-tag">OutbreakIQ</small>
            <h3>Disease Prediction Dashboard</h3>
            <p>
              From Numpy, Tensorflow for ML training, to Next.js for
              Visualization, OutbreakIQ is an AI powered health Intelligence
              system that tracks, monitors and predicts disease outbreaks across
              Nigeria.
            </p>
            <a href="" className="proj-link">
              View Project →
            </a>
          </div>
        </div>

        {/* Goftem Stores */}
        <div className="projects-grid reverse">
          <div className="proj-media">
            <img src="/Goftem.png" alt="campusTech" />
          </div>
          <div className="proj-card">
            <small className="proj-tag">Goftem Stores</small>
            <h3>E Commerce Website | Freelance</h3>
            <p>
              Built with Next.js, MongoDB, Express.js and Node.js, the Website
              allows users to browse products, make payments and also track
              orders.
            </p>
            <a href="https://goftemstores.vercel.app" className="proj-link">
              View Project →
            </a>
          </div>
        </div>

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
          <div className="proj-media">
            <img src="/CampusTech.png" alt="campusTech" />
          </div>
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
              A Web App and cross-platform mobile app built with React Native,
              Node.js and MongoDB to help students organize tasks and boost
              productivity.
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
