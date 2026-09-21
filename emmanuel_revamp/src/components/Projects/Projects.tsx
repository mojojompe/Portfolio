import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const CATEGORIES = ['Web', 'Mobile', 'AI', 'ML', 'CLI'] as const;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('Web');
  const filtered = projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <div className="section">
        <div className="projects-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">Projects</h2>
        </div>

        {/* Filter tabs */}
        <div className="project-filter-tabs" role="tablist">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`project-filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Unified Responsive Grid */}
        <div className="projects-grid">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={`project-card${index === 0 ? ' project-card--featured' : ''}`}
              style={{ '--card-index': index } as React.CSSProperties}
            >
              <img src={project.image} alt={project.title} className="project-card-img" loading="lazy" />
              <div className="project-card-overlay" />

              <div className="project-card-body">
                <div className="project-card-top">
                  <span className="project-category-pill">{project.category}</span>
                </div>
                <div className="project-card-bottom">
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-tech-pills">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="project-tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-card-actions">
                    <Link to={`/project/${project.id}`} className="project-action-btn project-action-btn--primary">
                      Case Study ↗
                    </Link>
                    {project.link && project.link !== '/' && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="project-action-btn project-action-btn--secondary">
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="no-projects">No projects in this category yet.</p>}
        </div>
      </div>
    </section>
  );
};

export default Projects;
