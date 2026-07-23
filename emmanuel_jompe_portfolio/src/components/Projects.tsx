import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import "./Projects.css";

const categories = ["Web", "Mobile", "AI", "ML", "CLI"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("Web");

    const filteredProjects = projectsData.filter(
        (project) => project.category === activeCategory
    );

    return (
        <section id="projects" className="projects-section" data-aos="fade-up">
            <div className="section-container">
                <h2 className="section-title">Projects</h2>

                {/* Filter Tabs */}
                <div className="filter-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Display - Grid Layout */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="project-card-modern"
                            style={{ '--index': index } as React.CSSProperties}
                        >
                            <img src={project.image} alt={project.title} className="project-bg-img" loading="lazy" />
                            <div className="project-gradient-overlay"></div>
                            
                            <div className="project-info-modern">
                                <h3>{project.title}</h3>

                                <div className="tech-stack-row">
                                    {project.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                                </div>

                                <div className="project-actions">
                                    <Link to={`/project/${project.id}`} className="view-proj-btn btn-primary">
                                        <span className="desktop-text">View Case Study</span>
                                        <span className="mobile-text">More</span>
                                    </Link>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noreferrer" className="view-proj-btn btn-secondary">
                                            <span className="desktop-text">Live Site</span>
                                            <span className="mobile-text">View</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <p className="no-projects">No projects found in this category.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
