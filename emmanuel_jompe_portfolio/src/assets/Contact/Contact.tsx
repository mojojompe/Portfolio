import "./Contact.css";
const Contact = () => {
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
        
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required />

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
