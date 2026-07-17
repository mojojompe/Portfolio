import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./PhotoWall.css";

const MagneticCard = ({ src }: { src: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates to [-0.5, 0.5]
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="magnetic-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
    >
      <div className="card-content">
        {/* Pulse ring behind the image */}
        <motion.div 
            className="pulse-ring"
            initial={{ opacity: 0, scale: 1 }}
            whileHover={{ 
                opacity: [0, 0.8, 0], 
                scale: [1, 1.4, 1.4],
            }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
        />
        <img src={src} alt="Emmanuel Jompe" className="wall-img" />
      </div>
    </motion.div>
  );
};

const PhotoWall = () => {
  const basePath = "/my pictures";
  
  const col1 = [
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.12.jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.13 (1).jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.13 (2).jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.13 (3).jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.13 (4).jpeg`,
  ];

  const col2 = [
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.13.jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.14 (1).jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.14 (2).jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.14 (3).jpeg`,
  ];

  const col3 = [
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.14.jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.15 (1).jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.15 (2).jpeg`,
    `${basePath}/WhatsApp Image 2026-07-13 at 18.44.15.jpeg`,
  ];

  return (
    <section className="photo-wall-section">
      <div className="photo-wall-container">
        
        {/* Column 1 */}
        <div className="wall-col">
          <div className="wall-track anim-scroll-up">
            {[...col1, ...col1].map((src, idx) => (
              <MagneticCard key={`col1-${idx}`} src={src} />
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="wall-col">
          <div className="wall-track anim-scroll-up-fast">
            {[...col2, ...col2, ...col2].map((src, idx) => (
              <MagneticCard key={`col2-${idx}`} src={src} />
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="wall-col">
          <div className="wall-track anim-scroll-up-slow">
            {[...col3, ...col3, ...col3].map((src, idx) => (
              <MagneticCard key={`col3-${idx}`} src={src} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhotoWall;
