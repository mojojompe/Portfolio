import "./Experience.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
    const experiences = [
        {
            type: "work",
            title: "Machine Learning Intern",
            company: "Code Alpha Inc.",
            period: "2026 - Present",
            desc: "Developing scalable Machine Learning Models"
        },
        {
            type: "work",
            title: "Full Stack Developer Intern",
            company: "Goftem Multiservices Ltd.",
            period: "2024 - 2025",
            desc: "Collaborated on frontend interfaces using React and assisted with API integration."
        },
        {
            type: "education",
            title: "B.Sc. Software Engineering",
            company: "Lead City University",
            period: "2023 - 2027",
            desc: "Specialized in Software Engineering and Artificial Intelligence."
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                <h2 className="section-title">Experience & Education</h2>

                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="timeline-item" data-aos="fade-up">
                            <div className="timeline-icon">
                                {exp.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
                            </div>
                            <div className="timeline-content glass-card">
                                <span className="timeline-date">{exp.period}</span>
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
