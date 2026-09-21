import { useEffect, useRef } from 'react';
import './AboutMe.css';

const STATS = [
  { value: '3+', label: 'Years Building' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '4.86', label: 'GPA (First Class)' },
];

const AboutMe = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = statsRef.current?.querySelectorAll('.stat-num');
    if (!els) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-me" className="aboutme-section">
      <div className="aboutme-inner">

        {/* Left – editorial pull quote */}
        <div className="aboutme-left" data-aos="fade-right">
          <span className="section-label">About Me</span>
          <blockquote className="aboutme-pull-quote">
            "Building at the intersection of code, intelligence, and security."
          </blockquote>
          {/* Decorative Memphis shapes */}
          <div className="memphis-shapes" aria-hidden="true">
            <div className="shape shape-circle" />
            <div className="shape shape-rect" />
            <div className="shape shape-dot-cluster">
              {Array.from({ length: 6 }).map((_, i) => <span key={i} className="dot" />)}
            </div>
          </div>
        </div>

        {/* Right – bio + stats */}
        <div className="aboutme-right" data-aos="fade-left" data-aos-delay="100">
          <p className="aboutme-text highlight-text">
            I'm Emmanuel, a Software Engineering student at Lead City University, Ibadan with a First Class grade
            (4.86/5.0), building at the intersection of full-stack development, AI/ML, and cybersecurity.
          </p>
          <p className="aboutme-text secondary-text">
            Currently interning at <strong>Nestlé Nigeria PLC</strong> as a Data Analysis Intern, and driven by a passion
            for turning complex problems into practical, scalable solutions. From civic apps to predictive health intelligence
            systems — I ship things that matter.
          </p>

          <div className="stats-grid" ref={statsRef}>
            {STATS.map(({ value, label }) => (
              <div key={label} className="stat-card">
                <span className="stat-num">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="aboutme-links">
            <a href="https://github.com/mojojompe" target="_blank" rel="noreferrer" className="aboutme-link">
              GitHub ↗
            </a>
            <a href="http://www.linkedin.com/in/emmanuel-jompe" target="_blank" rel="noreferrer" className="aboutme-link">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
