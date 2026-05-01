import { useState, useEffect } from "react";
import "./Chatbot.css";
import { MdClose, MdChat } from "react-icons/md";
import { AiBrain03Icon } from "hugeicons-react";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showBubble, setShowBubble] = useState(false);

    useEffect(() => {
        // Show bubble after a short delay on initial load
        const showTimer = setTimeout(() => {
            setShowBubble(true);
        }, 1500);

        // Optional: Hide bubble automatically after 10 seconds
        const hideTimer = setTimeout(() => {
            setShowBubble(false);
        }, 10000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setShowBubble(false);
    };

    return (
        <div className={`chatbot-wrapper ${isOpen ? "active" : ""}`}>
            {showBubble && !isOpen && (
                <div className="chat-bubble-popup" onClick={toggleChat} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MdChat size={18} />
                    Chat with my virtual assistant
                    <div className="bubble-tail"></div>
                </div>
            )}
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
