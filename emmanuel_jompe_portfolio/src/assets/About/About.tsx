import "./About.css";
import ScrollStack, { ScrollStackItem } from "../../components/ScrollStack";
import { AiBrain03Icon } from "hugeicons-react"; // User request for Ai icon
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaNetworkWired, FaTerminal, FaCode } from "react-icons/fa6";
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
  const techStack = {
    frontend: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Django", icon: SiDjango },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
    languages: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaCode },
      { name: "C++", icon: SiCplusplus },
      { name: "R", icon: SiR },
    ],
    frameworks: [
      { name: "React", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Expo", icon: SiExpo },
      { name: "NativeScript", icon: SiNativescript },
    ],
    devops: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Docker", icon: SiDocker },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Bash", icon: SiGnubash },
    ]
  };

  const allIcons = Object.values(techStack).flat();

  return (
    <section id="about" className="me-about" data-aos="fade-up">
      <div className="section-container">

        {/* Services / Overview */}
        <div className="about-intro">
          <h2 className="section-title">Overview</h2>
          <div className="services-scroll-wrapper">
            <ScrollStack itemDistance={50} stackPosition="15%" scaleEndPosition="10%">
              
              <ScrollStackItem>
                <article className="service-card glass-card" style={{ backgroundImage: "url('/Software Engineering.png')" }}>
                  <FaTerminal size={40} className="service-icon" />
                  <h3>Software Engineering</h3>
                  <p>Creation and management of modern software systems using robust architecture.</p>
                </article>
              </ScrollStackItem>

              <ScrollStackItem>
                <article className="service-card glass-card" style={{ backgroundImage: "url('/Cross Platform Development.png')" }}>
                  <MdDevices size={40} className="service-icon" />
                  <h3>Cross-Platform Dev</h3>
                  <p>Seamless web, mobile, and desktop applications with intuitive UX.</p>
                </article>
              </ScrollStackItem>

              <ScrollStackItem>
                <article className="service-card glass-card" style={{ backgroundImage: "url('/Network and Security.png')" }}>
                  <FaNetworkWired size={40} className="service-icon" />
                  <h3>Networking & Security</h3>
                  <p>Setup, monitoring, and vulnerability management ensuring system safety.</p>
                </article>
              </ScrollStackItem>

              <ScrollStackItem>
                <article className="service-card glass-card" style={{ backgroundImage: "url('/Mentorship.png')" }}>
                  <FaChalkboardTeacher size={40} className="service-icon" />
                  <h3>Mentorship</h3>
                  <p>Personalized software development training and technical guidance.</p>
                </article>
              </ScrollStackItem>

              <ScrollStackItem>
                <article className="service-card glass-card" style={{ backgroundImage: "url('/Artificial Intelligence.png')" }}>
                  <AiBrain03Icon size={40} className="service-icon" />
                  <h3>Artificial Intelligence</h3>
                  <p>Integrating AI solutions to solve complex problems.</p>
                </article>
              </ScrollStackItem>

            </ScrollStack>
          </div>
        </div>

        {/* Tech Stack - Marquee & Code Snippets */}
        <div className="tech-stack-section">
          <h2 className="section-title">Tech Stack</h2>

          {/* Infinite Marquee */}
          <div className="marquee-container">
            <div className="marquee-content">
              {allIcons.map((tech, i) => (
                <div key={i} className="marquee-item">
                  <tech.icon size={40} />
                </div>
              ))}
              {allIcons.map((tech, i) => (
                <div key={`dup-${i}`} className="marquee-item">
                  <tech.icon size={40} />
                </div>
              ))}
            </div>
          </div>

          <div className="code-snippets-grid">
            <CodeSnippet title="Frontend.ts" items={techStack.frontend} color="#3b82f6" />
            <CodeSnippet title="Backend.js" items={techStack.backend} color="#22c55e" />
            <CodeSnippet title="Languages.cpp" items={techStack.languages} color="#eab308" />
            <CodeSnippet title="DevOps.sh" items={techStack.devops} color="#f97316" />
          </div>
        </div>

      </div>
    </section>
  );
};

interface TechStackItem {
  name: string;
  icon: React.ElementType;
}

const CodeSnippet = ({ title, items, color }: { title: string, items: TechStackItem[], color: string }) => (
  <div className="code-card glass">
    <div className="code-header">
      <div className="window-controls">
        <span></span><span></span><span></span>
      </div>
      <span className="file-name">{title}</span>
    </div>
    <div className="code-body">
      {items.map((item, idx) => (
        <div key={idx} className="code-line">
          <span className="line-num">{idx + 1}</span>
          <span className="keyword">import</span>{" "}
          <span className="variable" style={{ color }}>{item.name}</span>{" "}
          <span className="keyword">from</span>{" "}
          <span className="string">"{item.name.toLowerCase()}"</span>;
        </div>
      ))}
    </div>
  </div>
);

export default About;
