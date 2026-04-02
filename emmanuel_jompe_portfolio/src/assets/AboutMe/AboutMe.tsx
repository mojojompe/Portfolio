import "./AboutMe.css";

const AboutMe = () => {
    return (
        <section id="about-me" className="about-me-section" data-aos="fade-up">
            <div className="about-me-overlay"></div>
            <div className="about-me-container">
                <div className="about-me-content">
                    <h2 className="section-title left-align">About Me</h2>
                    <p className="about-me-text">
                        I'm Emmanuel, a passionate Software Engineer and Cyber Security Specialist based in Lagos, Nigeria.
                        My journey in tech is driven by a curiosity to understand how things work and a desire to build
                        solutions that make a difference.
                    </p>
                    <p className="about-me-text">
                        With expertise spanning full-stack development, mobile apps, and machine learning, I enjoy tackling
                        complex problems and turning ideas into reality. When I'm not coding, I'm exploring new technologies
                        or finding ways to optimize systems for better performance and security.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
