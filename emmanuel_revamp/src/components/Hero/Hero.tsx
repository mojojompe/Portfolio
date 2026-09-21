import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpecularButton from '../ui/SpecularButton/SpecularButton';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const ROLES = ['Full-Stack Developer', 'ML & AI Engineer', 'Cyber Security Specialist', 'Mobile App Developer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typeText, setTypeText] = useState('');
  const heroRef = useRef<HTMLElement>(null);
  const textBgRef = useRef<HTMLDivElement>(null);
  
  const fullText = 'Building at the intersection of code, intelligence, and security.';

  // Role rotation
  useEffect(() => {
    const iv = setInterval(() => setRoleIndex(p => (p + 1) % ROLES.length), 3200);
    return () => clearInterval(iv);
  }, []);

  // Typewriter
  useEffect(() => {
    let idx = 0;
    setTypeText('');
    const iv = setInterval(() => {
      if (idx <= fullText.length) { setTypeText(fullText.slice(0, idx)); idx++; }
      else clearInterval(iv);
    }, 45);
    return () => clearInterval(iv);
  }, []);

  // GSAP parallax
  useEffect(() => {
    if (!textBgRef.current || !heroRef.current) return;
    
    gsap.to(textBgRef.current, {
      yPercent: -15, ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
    });
  }, []);

  return (
    <header id="hero" className="hero-section" ref={heroRef}>
      
      {/* Absolute Massive Background Text */}
      <div className="hero-massive-bg-text" ref={textBgRef} aria-hidden="true">
        <span className="bg-text-line bg-text-line-1">EMMANUEL</span>
        <span className="bg-text-line bg-text-line-2">JOMPE</span>
      </div>

      <div className="hero-inner">
        {/* Foreground Content separated into multiple cards scattered on desktop */}
        <div className="hero-cards-container" data-aos="fade-up" data-aos-duration="900">
          
          <div className="hero-card hero-card--role">
            <div className="hero-role-wrapper">
              <span key={roleIndex} className="hero-role">{ROLES[roleIndex]}</span>
            </div>
          </div>

          <div className="hero-card hero-card--tagline">
            <p className="hero-tagline">
              {typeText}
              <span className="type-cursor" aria-hidden="true">|</span>
            </p>
          </div>

          <div className="hero-card hero-card--actions">
            <div className="hero-actions">
              <SpecularButton
                size="md"
                radius={10}
                tint="#1a1917"
                tintOpacity={1}
                textColor="#fafaf8"
                lineColor="#d5cfc3"
                baseColor="#d5cfc3"
                intensity={1.3}
                onClick={() => { const el = document.querySelector('#projects'); el?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                View Projects
              </SpecularButton>
              <SpecularButton
                size="md"
                radius={10}
                tint="transparent"
                tintOpacity={0}
                textColor="#1a1917"
                lineColor="#1a1917"
                baseColor="#efede6"
                intensity={1.1}
                as="a"
                href="https://drive.google.com/file/d/1wo3hSGebGm-vAe1Jue4WsoawoGf906q5/view"
                className="hero-btn-outline"
              >
                Download Resume
              </SpecularButton>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/mojojompe" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="http://www.linkedin.com/in/emmanuel-jompe" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://wa.me/2348071455374" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;
