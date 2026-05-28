import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
      to_name: "Emmanuel",
      message_html: `
      <div style="font-family: Arial, sans-serif; padding: 1rem;">
       <h2 style="color: #058789;">New Message from ${name} (${email})</h2>
       <p>${message}</p>
      </div>
      `,
    };

    emailjs
      .send(
        "service_kdyz2m3",
        "template_b9h31sv",
        templateParams,
        "aKHyakSq_ls-cZQ9-"
      )
      .then(() => {
        setStatus("Email sent successfully!");
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch(() => {
        setStatus("Failed to send email. Please try again later.");
      });
  };
  return (
    <section id="contact" className="contact-section">
      <div
        className="contact-inner"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="contact-left">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-lead">
            Want to work together or have a question? Drop a message and I'll
            get back to you as soon as I can.
          </p>

          <div className="contact-info">
            <div>
              <strong>Email</strong>
              <a href="mailto:ayomiposiemmanuel9@gmail.com">        hello@emmanueljompe.dev</a>
            </div>
            <div>
              <strong>Location</strong>
              <div>Lagos, Nigeria</div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            name="name" 
            placeholder="Your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={5} 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required 
          />

          <button className="send-btn" type="submit">
            Send message
          </button>

          {status && <div className="status">{status}</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
