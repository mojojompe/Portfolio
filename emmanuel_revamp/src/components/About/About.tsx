import { useState, useEffect } from 'react';
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNodedotjs,
  SiExpress, SiDjango, SiMongodb, SiFirebase, SiPython, SiCplusplus, SiR,
  SiDocker, SiGooglecloud, SiGnubash, SiNextdotjs,
  SiTensorflow, SiScikitlearn, SiPandas, SiExpo, SiRedux,
} from 'react-icons/si';
import { FaCode, FaNetworkWired, FaTerminal, FaAws } from 'react-icons/fa6';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import { AiBrain03Icon } from 'hugeicons-react';
import './About.css';

const SERVICES = [
  { title: 'Software Engineering', desc: 'Creation and management of modern software systems using robust architecture and design patterns.', img: '/Software Engineering.png', Icon: FaTerminal },
  { title: 'Cross-Platform Dev', desc: 'Seamless web, mobile, and desktop applications with intuitive UX across all devices.', img: '/Cross Platform Development.png', Icon: MdDevices },
  { title: 'Networking & Security', desc: 'Setup, monitoring, and vulnerability management ensuring system integrity and safety.', img: '/Network and Security.png', Icon: FaNetworkWired },
  { title: 'Mentorship', desc: 'Personalized software development training and technical guidance for aspiring developers.', img: '/Mentorship.png', Icon: FaChalkboardTeacher },
  { title: 'Artificial Intelligence', desc: 'Integrating ML and AI solutions to solve complex real-world problems at scale.', img: '/Artificial Intelligence.png', Icon: AiBrain03Icon },
];

const TECH_BENTO = [
  {
    id: 'frontend', label: 'Frontend', size: 'wide',
    pills: [
      { name: 'HTML5', Icon: SiHtml5 }, { name: 'CSS3', Icon: SiCss },
      { name: 'JavaScript', Icon: SiJavascript }, { name: 'TypeScript', Icon: SiTypescript },
      { name: 'React', Icon: SiReact }, { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Redux', Icon: SiRedux },
    ]
  },
  {
    id: 'backend', label: 'Backend', size: 'normal',
    pills: [
      { name: 'Node.js', Icon: SiNodedotjs }, { name: 'Express', Icon: SiExpress },
      { name: 'Django', Icon: SiDjango }, { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Firebase', Icon: SiFirebase },
    ]
  },
  {
    id: 'languages', label: 'Languages', size: 'tall',
    pills: [
      { name: 'Python', Icon: SiPython }, { name: 'Java', Icon: FaCode },
      { name: 'C++', Icon: SiCplusplus }, { name: 'R', Icon: SiR },
      { name: 'TypeScript', Icon: SiTypescript },
    ]
  },
  {
    id: 'ml', label: 'ML / AI', size: 'normal',
    pills: [
      { name: 'TensorFlow', Icon: SiTensorflow }, { name: 'Scikit-learn', Icon: SiScikitlearn },
      { name: 'Pandas', Icon: SiPandas }, { name: 'LSTM', Icon: FaCode },
      { name: 'XGBoost', Icon: FaCode },
    ]
  },
  {
    id: 'mobile', label: 'Mobile', size: 'normal',
    pills: [
      { name: 'React Native', Icon: SiReact }, { name: 'Expo', Icon: SiExpo },
      { name: 'Mapbox', Icon: MdDevices },
    ]
  },
  {
    id: 'devops', label: 'DevOps & Cloud', size: 'wide',
    pills: [
      { name: 'AWS', Icon: FaAws }, { name: 'Docker', Icon: SiDocker },
      { name: 'GCP', Icon: SiGooglecloud }, { name: 'Bash', Icon: SiGnubash },
      { name: 'Firebase', Icon: SiFirebase },
    ]
  },
];

const ALL_MARQUEE_ICONS = [
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiDjango, SiMongodb, SiFirebase,
  SiPython, SiCplusplus, SiR, SiTensorflow, SiScikitlearn, SiPandas,
  FaAws, SiDocker, SiGooglecloud, SiGnubash, SiExpo,
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div id="about">
      {/* ── Services / What I Do ── */}
      <section className="services-section">
        <div className="section services-inner">
          <div className="services-header" data-aos="fade-up">
            <span className="section-label">What I Do</span>
            <h2 className="section-heading">Services</h2>
          </div>

          {isMobile ? (
            <div className="services-marquee-container" data-aos="fade-up">
              <div className="services-marquee-track">
                {[...SERVICES, ...SERVICES].map((svc, i) => (
                  <ServiceCard key={i} svc={svc} />
                ))}
              </div>
            </div>
          ) : (
            <div className="services-bento" data-aos="fade-up">
              {SERVICES.map((svc, i) => (
                <div key={i} className={`bento-service-item bento-service-item--${i + 1}`}>
                  <ServiceCard svc={svc} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="tech-section">
        <div className="tech-section-bg" aria-hidden="true" />
        <div className="section" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tech-header" data-aos="fade-up">
            <span className="section-label">Skills</span>
            <h2 className="section-heading">Tech Stack</h2>
          </div>

          {/* Marquee of logos */}
          <div className="tech-marquee-wrapper" data-aos="fade-up">
            <div className="tech-marquee-track">
              {[...ALL_MARQUEE_ICONS, ...ALL_MARQUEE_ICONS].map((Icon, i) => (
                <div key={i} className="tech-marquee-item">
                  <Icon size={36} />
                </div>
              ))}
            </div>
          </div>

          {/* Bento Grid of pills */}
          <div className="tech-bento-grid" data-aos="fade-up">
            {TECH_BENTO.map(({ id, label, size, pills }) => (
              <div key={id} className={`tech-bento-card tech-bento-card--${size} tech-bento-card--${id}`}>
                <span className="tech-bento-label">{label}</span>
                <div className="tech-pills-wrap">
                  {pills.map(({ name, Icon }) => (
                    <span key={name} className="tech-pill">
                      <Icon size={14} aria-hidden="true" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ svc }: { svc: typeof SERVICES[0] }) => (
  <article className="service-card">
    <img src={svc.img} alt={svc.title} className="service-card-img" loading="lazy" />
    <div className="service-card-overlay" />
    <div className="service-card-content">
      <svc.Icon size={28} className="service-icon" aria-hidden="true" />
      <h3>{svc.title}</h3>
      <p>{svc.desc}</p>
    </div>
  </article>
);

export default About;
