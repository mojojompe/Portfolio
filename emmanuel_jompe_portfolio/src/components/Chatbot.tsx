import { useState } from "react";
import "./Chatbot.css";
import { MdClose } from "react-icons/md";
import { AiBrain03Icon } from "hugeicons-react";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className={`chatbot-wrapper ${isOpen ? "active" : ""}`}>
            <button className={`chatbot-toggle ${isOpen ? "open" : ""}`} onClick={toggleChat}>
                {isOpen ? <MdClose size={28} /> : <AiBrain03Icon size={28} />}
            </button>

            <div className={`chatbot-window glass-card ${isOpen ? "open" : ""}`} style={{ padding: 0, overflow: "hidden", height: "600px", width: "400px" }}>
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/RWm51qQl9k1h71rfroOfe"
                    width="100%"
                    style={{ height: "100%", minHeight: "100%" }}
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default Chatbot;
