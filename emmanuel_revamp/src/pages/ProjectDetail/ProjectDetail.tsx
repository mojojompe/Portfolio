import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projectsData } from '../../data/projectsData';
import SpecularButton from '../../components/ui/SpecularButton/SpecularButton';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [id]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/" className="pd-back-link">← Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <article className="project-detail-page fade-in">
      {/* ── Hero ── */}
      <div className="pd-hero" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="pd-hero-overlay" />
        <div className="pd-hero-nav">
          <Link to="/" className="pd-back-link">← All Projects</Link>
        </div>
        <div className="pd-hero-content">
          <span className="pd-category">{project.category}</span>
          <h1 className="pd-title">{project.title}</h1>
        </div>
      </div>

      {/* ── Content Grid ── */}
      <div className="pd-content-grid section">

        {/* Left column: Overview, Challenge, Solution */}
        <div className="pd-col-main">
          <div className="pd-card">
            <h2 className="pd-card-heading">Overview</h2>
            <p className="pd-prose">{project.description}</p>
          </div>

          {project.failures && (
            <div className="pd-card pd-card--warning">
              <div className="pd-card-badge">⚠ The Challenge</div>
              <p className="pd-prose">{project.failures}</p>
            </div>
          )}

          {project.lessons && (
            <div className="pd-card pd-card--success">
              <div className="pd-card-badge">💡 The Solution</div>
              <p className="pd-prose">{project.lessons}</p>
            </div>
          )}
        </div>

        {/* Right column: Tech Stack, Links, Category */}
        <aside className="pd-col-sidebar">
          <div className="pd-card">
            <h3 className="pd-sidebar-heading">Tech Stack</h3>
            <div className="pd-tech-pills">
              {project.tech.map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>

          <div className="pd-card">
            <h3 className="pd-sidebar-heading">Links</h3>
            <div className="pd-action-buttons">
              {project.link && project.link !== '/' && (
                <SpecularButton
                  size="sm"
                  radius={10}
                  tint="#1a1917"
                  tintOpacity={1}
                  textColor="#fafaf8"
                  lineColor="#d5cfc3"
                  baseColor="#676663"
                  intensity={1.2}
                  as="a"
                  href={project.link}
                >
                  Live Site ↗
                </SpecularButton>
              )}
              {project.github && (
                <SpecularButton
                  size="sm"
                  radius={10}
                  tint="#fafaf8"
                  tintOpacity={1}
                  textColor="#1a1917"
                  lineColor="#676663"
                  baseColor="#d5cfc3"
                  intensity={0.8}
                  as="a"
                  href={project.github}
                >
                  Source Code ↗
                </SpecularButton>
              )}
            </div>
          </div>

          <div className="pd-card">
            <h3 className="pd-sidebar-heading">Category</h3>
            <span className="pd-category-chip">{project.category}</span>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default ProjectDetail;
