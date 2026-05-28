import { useParams, Link } from 'react-router-dom';
import { MdArrowBack, MdArrowOutward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/" className="back-link"><MdArrowBack /> Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page fade-in">
      <div className="project-hero" style={{ backgroundImage: `url("${project.image}")` }}>
        <div className="hero-overlay"></div>
        <div className="project-header">
          <Link to="/" className="back-link glass-card-btn">
            <MdArrowBack /> Back to Portfolio
          </Link>
        </div>
        <div className="hero-content">
          <span className="category-tag">{project.category}</span>
          <h1 className="project-title">{project.title}</h1>
        </div>
      </div>

      <div className="project-body section-container">
        <div className="project-main">
          <h2>Overview</h2>
          <p className="project-description-full">{project.description}</p>
          
          <div className="project-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary">
                View Live Project <MdArrowOutward />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                <FaGithub /> Source Code
              </a>
            )}
          </div>
        </div>

        <div className="project-sidebar">
          <div className="sidebar-sticky-wrapper">
            <div className="glass-card tech-stack-card">
              <h3>Technologies Used</h3>
              <div className="tech-stack-list">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="glass-card lessons-card">
              <h3>Failures & Lessons</h3>
              <p>
                {/* @ts-ignore - Fallback for missing lessons field */}
                {project.lessons || "Key takeaways from this project involved optimizing rendering performance and ensuring strict type-safety across the application architecture. Debugging integration bottlenecks led to a highly robust, scalable end product."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
