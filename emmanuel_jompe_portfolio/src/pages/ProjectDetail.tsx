import { useParams, Link } from 'react-router-dom';
import { MdArrowBack, MdArrowOutward, MdWarning, MdLightbulb } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
        <div className="hero-blur-overlay"></div>
        <div className="project-header-nav">
          <Link to="/" className="back-link glass-btn">
            <MdArrowBack /> Back to Portfolio
          </Link>
        </div>
        
        <div className="hero-content-wrapper">
            <div className="hero-text-content">
                <span className="category-pill">{project.category}</span>
                <h1 className="project-title-large">{project.title}</h1>
                <div className="project-action-links">
                    {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary-action">
                        View Live Project <MdArrowOutward />
                    </a>
                    )}
                    {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary-action">
                        <FaGithub /> Source Code
                    </a>
                    )}
                </div>
            </div>
            <div className="hero-image-showcase">
                <img src={project.image} alt={project.title} className="showcase-img" />
            </div>
        </div>
      </div>

      <div className="project-bento-container section-container">
        
        <div className="bento-card overview-card glass-card">
          <h2>Overview</h2>
          <p className="project-description-full">{project.description}</p>
        </div>

        <div className="bento-card tech-card glass-card">
          <h3>Technologies Used</h3>
          <div className="tech-stack-list">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>

        {project.failures && (
            <div className="bento-card failure-card glass-card">
                <div className="card-header failure-header">
                    <MdWarning size={24} />
                    <h3>The Challenge</h3>
                </div>
                <p className="insight-text">{project.failures}</p>
            </div>
        )}

        {project.lessons && (
            <div className="bento-card lesson-card glass-card">
                <div className="card-header lesson-header">
                    <MdLightbulb size={24} />
                    <h3>The Solution</h3>
                </div>
                <p className="insight-text">{project.lessons}</p>
            </div>
        )}

      </div>
    </div>
  );
};

export default ProjectDetail;
