import "./Hero.css";

const Hero = () => {
  return (
    <header id="hero" className="site-hero">
      <div className="hero-inner">
        <div
          className="hero-content"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="eyebrow">Hey, I'm</span>

          <h1 className="hero-name">
            Emmanuel <strong>Jompe</strong>
          </h1>
          <h2 className="hero-role">Software Engineer.</h2>

          <p className="hero-blurb">
            I am a Software Engineer with extensive experience with development
            tools and a passion for creating innovative solutions, designing
            scalable systems, and contributing immensely to the tech world.
          </p>

          <div className="hero-actions">
            <a className="cta" href="#projects">
              See Projects
            </a>
            <a className="cta ghost" href="#about">
              About Me
            </a>
          </div>

          <div className="tech-inline">
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">React</span>
            <span className="tech-pill">Next.js</span>
            <span className="tech-pill">MongoDB</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
