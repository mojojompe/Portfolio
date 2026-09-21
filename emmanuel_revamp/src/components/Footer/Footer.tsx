import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <img src="/LogoWhite.png" alt="Emmanuel Jompe" className="footer-logo" />
        <p className="footer-tagline">Software Engineer · ML & AI · Cybersecurity</p>
        <p className="footer-desc">Building digital experiences with passion and precision.</p>
      </div>

      <div className="footer-links-group">
        <div className="footer-col">
          <h3>Navigation</h3>
          <ul>
            {['#hero', '#about-me', '#projects', '#experience', '#tech-news', '#contact'].map((href, i) => {
              const labels = ['Home', 'About', 'Projects', 'Experience', 'Tech News', 'Contact'];
              return <li key={href}><a href={href}>{labels[i]}</a></li>;
            })}
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:ayomiposiemmanuel9@gmail.com">ayomiposiemmanuel9@gmail.com</a></li>
            <li>+234 807 145 5374</li>
            <li>Ibadan, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="footer-socials">
        {[
          { href: 'https://github.com/mojojompe',                  label: 'GitHub' },
          { href: 'http://www.linkedin.com/in/emmanuel-jompe',     label: 'LinkedIn' },
          { href: 'https://wa.me/2348071455374',                   label: 'WhatsApp' },
          { href: 'https://twitter.com/EmmanuelJompe',             label: 'Twitter' },
          { href: 'https://www.instagram.com/emmanuel_jompe/',     label: 'Instagram' },
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="footer-social-btn" aria-label={s.label}>
            {s.label[0]}
          </a>
        ))}
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Emmanuel Jompe. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
