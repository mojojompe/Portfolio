import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_email: email,
      message_html: `
      <div style = "font-family: Arial, sans-serif; padding: 1rem;">
       <h2 style = "color: #058789;">  Thank You for contacting Me!! </h2>
       <p> Hi There,</p>
       <p> I appreciate your interest in my work. </p>
       <br />
       <p> I will get back to you as soon as possible. </p>
       <p style = "font-style: italic;"> &copy; 2025 Emmanuel Jompe. All rights reserved. </p>
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
<<<<<<< HEAD
        setStatus("Email sent successfully!");
        setEmail("");
=======
        setStatus('Mail sent successfully!');
        setEmail('');
>>>>>>> 1f1183c07c482f67299f601884aef49dc5929810
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
              <div>hello@emmanueljompe.dev</div>
            </div>
            <div>
              <strong>Location</strong>
              <div>Lagos, Nigeria</div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Your name" required />

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
          <textarea id="message" name="message" rows={5} required />

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
