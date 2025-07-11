import "./Hero.css";


const Hero = () => {
  return (
    <>
      <section className="hero">
        <div
          className="hero-content"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h1 className="hero-title">
            Hi, I'm <span>Emmanuel</span>
          </h1>
          <p className="hero-subtitle">
            I am a Software Engineer with a extensive experience with
            development tools and a passion for creating innovative solutions,
            designing scalable systems and dedicated to contributing immensely
            to the Tech World
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
