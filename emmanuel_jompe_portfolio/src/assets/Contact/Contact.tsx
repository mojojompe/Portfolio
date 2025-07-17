import "./Contact.css";
import { useState } from "react";
import emailjs from '@emailjs/browser'
const Contact = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

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

    emailjs.send('service_kdyz2m3', 'template_b9h31sv', templateParams, 'aKHyakSq_ls-cZQ9-')
      .then(() => {
        setStatus('Email sent successfully!');
        setEmail('');
      })
      .catch(() => {
        setStatus('Failed to send email. Please try again later.');
      });
  };
  return (
    <section className="heroC">
      <div
        className="hero-content"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
     <div className="about-head">
     <h2 className="about-us-h2">Contact Me</h2>
     </div>
        
        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required />

          <button type="submit">Send</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
