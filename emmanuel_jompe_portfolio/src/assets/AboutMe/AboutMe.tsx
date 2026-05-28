import "./AboutMe.css";

const AboutMe = () => {
    return (
        <section id="about-me" className="about-me-section">
            <div className="about-me-container">
                <div className="about-me-grid">
                    <div className="about-me-header" data-aos="fade-right">
                        <h2 className="section-title left-align">About Me</h2>
                        <div className="accent-line"></div>
                    </div>
                    <div className="about-me-content" data-aos="fade-left">
                        <p className="about-me-text highlight-text">
                            I'm Emmanuel, a passionate Software Engineer and Cyber Security Specialist based in Lagos, Nigeria.
                            My journey in tech is driven by a curiosity to understand how things work and a desire to build
                            solutions that make a difference.
                        </p>
                        <p className="about-me-text secondary-text">
                            With expertise spanning full-stack development, mobile apps, and machine learning, I enjoy tackling
                            complex problems and turning ideas into reality. When I'm not coding, I'm exploring new technologies
                            or finding ways to optimize systems for better performance and security.
                        </p>
                        
                        <div className="stats-row">
                            <div className="stat-item">
                                <span className="stat-num">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">20+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
