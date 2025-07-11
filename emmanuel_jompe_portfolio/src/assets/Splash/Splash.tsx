import { useState, useEffect } from "react";
import "./Splash.css";


const Splash = () => {
  const text = "Welcome to My Portfolio!!";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="splash-screen">
      <img src="/LogoBlack.png" alt="splash-logo" />
      <h1>Loading...</h1>
      <h1>{displayed}</h1>
    </div>
  );
};

export default Splash;
