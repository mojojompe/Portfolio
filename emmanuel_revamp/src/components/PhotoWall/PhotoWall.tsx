import DriftWall from '../ui/DriftWall/DriftWall';
import './PhotoWall.css';

const PhotoWall = () => {
  return (
    <section id="photo-wall" className="photo-wall-section" aria-label="Photo gallery">
      <div className="photo-wall-header" data-aos="fade-up">
        <span className="section-label">Personal</span>
        <h2 className="section-heading">A Glimpse of Me</h2>
        <p className="photo-wall-sub">Beyond the code, moments that shaped who I am.</p>
      </div>

      <div className="photo-wall-canvas">
        <DriftWall
          columns={4}
          tileWidth={190}
          tileHeight={250}
          gap={14}
          radius={14}
          tilt={14}
          turn={-10}
          perspective={1100}
          depth={90}
          speed={32}
          direction="up"
          variance={0.4}
          parallax={0.55}
          lift={52}
          fade={0.52}
          dim={0.48}
          grayscale={false}
          overlayColor="rgba(239,237,230,0.15)"
        />
      </div>
    </section>
  );
};

export default PhotoWall;
