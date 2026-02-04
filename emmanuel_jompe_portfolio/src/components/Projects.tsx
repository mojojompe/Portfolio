import { useState, useEffect } from "react";
import "./Projects.css";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { MdClose, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

interface Project {
    id: string;
    category: "Web" | "Mobile" | "AI" | "ML" | "CLI";
    title: string;
    description: string;
    image: string;
    link: string;
    github?: string;
    tech: string[];
}

const projectsData: Project[] = [
    // Web
    {
        id: "campus-tech",
        category: "Web",
        title: "Campus Tech",
        description: "Built the frontend of a student collaboration portal using HTML, CSS and JavaScript.",
        image: "/CampusTech.png",
        link: "https://campus-tech-group.vercel.app/",
        tech: ["HTML", "CSS", "JS"],
    },
    {
        id: "goftem",
        category: "Web",
        title: "Goftem Stores",
        description: "Built with Next.js, MongoDB, Express.js and Node.js. Allows users to browse products, make payments and track orders.",
        image: "/Goftem.png",
        link: "https://goftemstores.vercel.app",
        tech: ["Next.js", "MongoDB", "Express", "Node.js"],
    },
    {
        id: "medicare",
        category: "Web",
        title: "MediCare",
        description: "Digital healthcare platform bridging the gap between healthcare providers and patients.",
        image: "/Medicare.png",
        link: "https://medicare-home.vercel.app",
        tech: ["TypeScript", "React", "Node.js", "Express.js"],
    },

    // Mobile
    {
        id: "eduplanner",
        category: "Mobile",
        title: "EduPlanner",
        description: "Student productivity app built with React Native, Node.js and MongoDB to help students organize tasks.",
        image: "/Eduplanner.jpg",
        link: "https://edu-planner-home.vercel.app",
        tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
    },

    // AI
    {
        id: "outbreakiq",
        category: "AI",
        title: "OutbreakIQ",
        description: "AI powered health Intelligence system that tracks, monitors and predicts disease outbreaks across Nigeria.",
        image: "/OutbreakIQ.png",
        link: "",
        tech: ["Numpy", "Tensorflow", "Next.js"],
    },
    {
        id: "finalytics",
        category: "AI",
        title: "Finalytics",
        description: "Real time market visualisation and Ai powered price predictions using LSTM neural networks.",
        image: "/Finalytics.png",
        link: "https://market-finalytics.vercel.app",
        tech: ["LSTM", "Python", "React"],
    },
    {
        id: "saferoute",
        category: "AI",
        title: "Safe Route Ai",
        description: "Helps users choose safer walking and driving routes by scoring paths based on risk and environment.",
        image: "/SafeRoute.png",
        link: "https://safe-route-ai.vercel.app",
        tech: ["React", "Node.js", "Raindrop API", "Mapbox", "MongoDB"],
    },

    // ML
    {
        id: "creditscoring",
        category: "ML",
        title: "Credit Scoring Model",
        description: "A machine learning model designed to predict creditworthiness based on applicant data.",
        image: "/Credit Scoring Code.png",
        link: "https://github.com/mojojompe/",
        tech: ["Python", "Scikit-learn"],
    },
    {
        id: "diseasepred",
        category: "ML",
        title: "Disease Prediction Model",
        description: "A disease prediction system utilizing ensemble learning techniques.",
        image: "/Disease Prediction Code.png",
        link: "https://github.com/mojojompe/",
        tech: ["Ensemble Learning", "Python"],
    },
    {
        id: "charrecogn",
        category: "ML",
        title: "Character Recognition",
        description: "Deep learning project for recognizing handwritten characters using CNNs.",
        image: "/Character Recognition Code.png",
        link: "https://github.com/mojojompe/",
        tech: ["CNN", "Deep Learning"],
    },

    // CLI
    {
        id: "ayla",
        category: "CLI",
        title: "AYLA Voice Assistant",
        description: "Voice assistant using pyttsx3 and Speech Recognition. Performs actions and speaks responses.",
        image: "/AYLA Voice Assistant.png",
        link: "https://github.com/mojojompe",
        tech: ["Python", "pyttsx3"],
    },
    {
        id: "facrec",
        category: "CLI",
        title: "Facial Recognition Soft.",
        description: "Uses Tkinter GUI for face-recognition attendance. Implements image capture, training and live tracking.",
        image: "/FR Software.png",
        link: "https://github.com/mojojompe",
        tech: ["OpenCV", "Tkinter", "Pandas"],
    },
    {
        id: "clinic",
        category: "CLI",
        title: "Clinic Management Sys.",
        description: "Comprehensive CLI-based Clinic Management System featuring patient and doctor management.",
        image: "/CLI code.png", // Assuming image name from previous context or using a placeholder if not
        link: "https://github.com/mojojompe",
        tech: ["Python", "CLI"],
    }
];

const categories = ["Web", "Mobile", "AI", "ML", "CLI"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("Web");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Filter projects
    const filteredProjects = projectsData.filter((p) => p.category === activeCategory);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
    };

    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <h2 className="section-title">Featured Projects</h2>

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

                {/* Project Display */}
                {isMobile ? (
                    /* Mobile Scroll Stack */
                    <div className="scroll-stack-wrapper">
                        <ScrollStack
                            itemDistance={50}
                            stackPosition="10%"
                            scaleEndPosition="30%"
                            itemStackDistance={20}
                        >
                            {filteredProjects.map((project, index) => (
                                <ScrollStackItem key={project.id} itemClassName="proj-stack-item">
                                    <div className="stack-card-inner" onClick={() => openModal(project)}>
                                        <div className="stack-img-wrap">
                                            <img src={project.image} alt={project.title} loading="lazy" />
                                        </div>
                                        <div className="stack-info">
                                            <h3>{project.title}</h3>
                                            <p>{project.description.substring(0, 60)}...</p>
                                            <span className="view-more">Tap to view</span>
                                        </div>
                                    </div>
                                </ScrollStackItem>
                            ))}
                        </ScrollStack>
                    </div>
                ) : (
                    /* Desktop Grid */
                    <div className="projects-grid-desktop">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="desktop-proj-card glass-card"
                                    onClick={() => openModal(project)}
                                >
                                    <div className="card-img">
                                        <img src={project.image} alt={project.title} loading="lazy" />
                                        <div className="card-overlay">
                                            <span>View Details</span>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h3>{project.title}</h3>
                                        <div className="tech-tags">
                                            {project.tech.map(t => <span key={t}>{t}</span>)}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-projects">No projects found in this category.</p>
                        )}
                    </div>
                )}
            </div>

            {/* Fullscreen Modal */}
            {selectedProject && (
                <div className="project-modal-overlay active">
                    <div className="project-modal-backdrop" onClick={closeModal}></div>
                    <div className="project-modal-content glass-card">
                        <button className="close-modal" onClick={closeModal}>
                            <MdClose size={32} />
                        </button>

                        <div className="modal-header">
                            <div className="modal-img-container">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                                <div className="modal-gradient-overlay"></div>
                            </div>
                            <h2 className="modal-title">{selectedProject.title}</h2>
                        </div>

                        <div className="modal-body">
                            <p className="modal-desc">{selectedProject.description}</p>

                            <div className="modal-tech-stack">
                                {selectedProject.tech.map((tech) => (
                                    <span key={tech} className="modal-tech-pill">{tech}</span>
                                ))}
                            </div>

                            <div className="modal-actions">
                                {selectedProject.link && (
                                    <a href={selectedProject.link} target="_blank" rel="noreferrer" className="modal-btn primary">
                                        View Project <MdArrowOutward />
                                    </a>
                                )}
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-btn secondary">
                                        <FaGithub /> Github
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
