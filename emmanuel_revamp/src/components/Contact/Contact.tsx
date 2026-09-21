import { useState } from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import SpecularButton from '../ui/SpecularButton/SpecularButton';
import './Contact.css';

const Contact = () => {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .send('service_kdyz2m3', 'template_b9h31sv', { from_name: name, reply_to: email, message, to_name: 'Emmanuel' }, 'aKHyakSq_ls-cZQ9-')
      .then(() => { setStatus('success'); setName(''); setEmail(''); setMessage(''); })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section contact-inner">

        {/* Left */}
        <div className="contact-left" data-aos="fade-right">
          <span className="section-label">Get In Touch</span>
          <h2 className="contact-heading">Let's Build<br />Something.</h2>
          <p className="contact-lead">
            A collaboration, a question, or a 6-figure opportunity, I'm always open to meaningful conversations.
          </p>

          <div className="contact-details">
            <a href="mailto:ayomiposiemmanuel9@gmail.com" className="contact-detail-item">
              <span className="contact-detail-icon"><MdEmail size={20} /></span>
              <span>ayomiposiemmanuel9@gmail.com</span>
            </a>
            <div className="contact-detail-item">
              <span className="contact-detail-icon"><MdLocationOn size={20} /></span>
              <span>Ibadan, Nigeria</span>
            </div>
          </div>

          <div className="contact-socials">
            {[
              { href: 'https://github.com/mojojompe',                   label: 'GitHub',    icon: '⌥ GH' },
              { href: 'http://www.linkedin.com/in/emmanuel-jompe',      label: 'LinkedIn',  icon: '⌥ LI' },
              { href: 'https://wa.me/2348071455374',                    label: 'WhatsApp',  icon: '⌥ WA' },
              { href: 'https://twitter.com/EmmanuelJompe',              label: 'Twitter',   icon: '⌥ TW' },
              { href: 'https://www.instagram.com/emmanuel_jompe/',      label: 'Instagram', icon: '⌥ IG' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact-social-pill" aria-label={s.label}>
                {s.label}
              </a>
            ))}
          </div>

          <div className="contact-illustration" aria-hidden="true">
            <img src="/contact-illustration.jpg" alt="Reach out illustration" />
          </div>
        </div>

        {/* Right – Form */}
        <div className="contact-right" data-aos="fade-left" data-aos-delay="100">
          <form className="contact-form" onSubmit={sendEmail} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={6} placeholder="Tell me about your project or opportunity..." value={message} onChange={e => setMessage(e.target.value)} required />
            </div>

            <SpecularButton
              type="submit"
              size="lg"
              radius={12}
              tint="#1a1917"
              tintOpacity={1}
              textColor="#fafaf8"
              lineColor="#d5cfc3"
              baseColor="#676663"
              intensity={1.3}
              className="contact-submit-btn"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </SpecularButton>

            {status === 'success' && (
              <div className="form-status form-status--success" role="alert">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status form-status--error" role="alert">
                ✕ Failed to send. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
