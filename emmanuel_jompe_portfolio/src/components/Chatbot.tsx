import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";
import { MdChat, MdClose, MdSend, MdSmartToy } from "react-icons/md";

interface Message {
    sender: "bot" | "user";
    text: string;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: "bot", text: "Hi! I'm Emmanuel's virtual assistant. Ask me anything about his skills, projects, or experience!" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
        setInput("");

        // Simple delay to simulate thinking
        setTimeout(() => {
            const botResponse = getBotResponse(userMsg);
            setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
        }, 600);
    };

    const getBotResponse = (msg: string) => {
        const lowerMsg = msg.toLowerCase();

        if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
            return "Hello there! How can I help you today?";
        }
        if (lowerMsg.includes("stack") || lowerMsg.includes("tech") || lowerMsg.includes("skills")) {
            return "Emmanuel is proficient in the MERN stack (MongoDB, Express, React, Node.js), Python (Django, ML libs), and various cross-platform mobile frameworks like React Native.";
        }
        if (lowerMsg.includes("project")) {
            return "You can view his featured projects in the Projects section. Highlights include 'Safe Route Ai', 'OutbreakIQ', and 'Finalytics'.";
        }
        if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("reach")) {
            return "You can reach Emmanuel at hello@emmanueljompe.dev or through the Contact form below.";
        }
        if (lowerMsg.includes("experience") || lowerMsg.includes("work")) {
            return "Emmanuel has experience as a Software Engineer, building scalable web and mobile applications.";
        }
        if (lowerMsg.includes("resume") || lowerMsg.includes("cv")) {
            return "You can download his resume from the Hero section or the Footer.";
        }
        return "I'm not sure about that. Try asking about his 'skills', 'projects', or 'contact' info!";
    };

    return (
        <div className="chatbot-wrapper">
            <button className={`chatbot-toggle ${isOpen ? "open" : ""}`} onClick={toggleChat}>
                {isOpen ? <MdClose size={28} /> : <MdChat size={28} />}
            </button>

            <div className={`chatbot-window glass-card ${isOpen ? "open" : ""}`}>
                <div className="chatbot-header">
                    <div className="chatbot-avatar">
                        <MdSmartToy size={24} color="#10b981" />
                    </div>
                    <div>
                        <h3>Assistant</h3>
                        <span className="online-indicator">Online</span>
                    </div>
                </div>

                <div className="chatbot-messages">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chatbot-input" onSubmit={handleSend}>
                    <input
                        type="text"
                        placeholder="Ask a question..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">
                        <MdSend />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;
