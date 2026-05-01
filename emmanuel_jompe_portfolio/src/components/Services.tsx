import "./Services.css";
import { MdWeb, MdSmartphone } from "react-icons/md";
import { AiBrain03Icon } from "hugeicons-react";

const servicesData = [
    {
        id: "web",
        title: "Full-Stack Web Development",
        description: "Building scalable, responsive, and performant web applications using modern technologies like React, Next.js, Node.js, and MongoDB.",
        icon: <MdWeb size={40} />,
    },
    {
        id: "ai",
        title: "AI & Machine Learning",
        description: "Developing intelligent systems, predictive models, and data-driven applications utilizing Python, TensorFlow, and Scikit-learn.",
        icon: <AiBrain03Icon size={40} />,
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        description: "Creating seamless cross-platform mobile experiences for iOS and Android using React Native.",
        icon: <MdSmartphone size={40} />,
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="section-container" data-aos="fade-up">
                <h2 className="section-title">What I Do</h2>
                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service-card glass-card" data-aos="fade-up">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
