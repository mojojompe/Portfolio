import './Experience.css';

const experiences = [
  {
    type: 'work',
    title: 'Data Analysis Intern',
    company: 'Nestlé Nigeria PLC',
    period: 'Jul 2026 – Present',
    desc: 'Data-driven analysis to support business intelligence, sales analytics, and operational reporting for one of Nigeria\'s largest FMCG companies.',
    location: 'Ibadan, Nigeria',
  },
  {
    type: 'work',
    title: 'Machine Learning Intern',
    company: 'Code Alpha Inc.',
    period: 'Dec 2025 – Feb 2026',
    desc: 'Developed and deployed scalable ML models across classification, regression, and NLP tasks. Built production pipelines for predictive analytics.',
    location: 'Remote',
  },
  {
    type: 'work',
    title: 'Full-Stack Developer Intern',
    company: 'GOFTEM Multiservices Ltd.',
    period: 'Jul 2024 – Aug 2025',
    desc: 'Built and maintained full-stack features for an e-commerce platform using React and Node.js. Led API integrations and frontend performance improvements.',
    location: 'Lagos, Nigeria',
  },
  {
    type: 'education',
    title: 'B.Sc. Software Engineering',
    company: 'Lead City University',
    period: 'Sept 2023 – Nov 2027',
    desc: 'Specialized in Software Engineering and Artificial Intelligence. Currently maintaining a First Class GPA of 4.86 / 5.0.',
    location: 'Ibadan, Nigeria',
  },
  {
    type: 'education',
    title: 'ML & AI Programme',
    company: 'SQI College of ICT',
    period: 'Aug 2025 – Present',
    desc: 'Intensive post-grad-level programme in Machine Learning, Deep Learning, NLP, and AI systems engineering.',
    location: 'Lagos, Nigeria',
  },
];

const BriefcaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/>
  </svg>
);

const CapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="section">
      <span className="section-label">Background</span>
      <h2 className="section-heading">Experience & Education</h2>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`timeline-item timeline-item--${exp.type}`} data-aos="fade-up" data-aos-delay={idx * 80}>
            <div className="timeline-dot">
              {exp.type === 'work' ? <BriefcaseIcon /> : <CapIcon />}
            </div>

            <div className="timeline-connector" aria-hidden="true" />

            <div className="timeline-card">
              <div className="timeline-card-top">
                <div className="timeline-meta-group">
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
                <span className={`timeline-type-badge timeline-type-badge--${exp.type}`}>
                  {exp.type === 'work' ? 'Work' : 'Education'}
                </span>
              </div>
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-desc">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
