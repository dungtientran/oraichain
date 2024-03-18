import React, { useEffect, useRef } from "react";
import Hero_Banner from "../../../../assets/images/herro_banner.jpg";
import Hero_Star_1 from "../../../../assets/images/hero_start_1.png";
import Star_Mask_1 from "../../../../assets/images/stars_mask_1.png";
import VanillaTilt from "vanilla-tilt";

const HeroBanner = () => {
  const tiltRef = useRef(null);
  useEffect(() => {
    if (!tiltRef.current) return;
    VanillaTilt.init(tiltRef.current, {
      max: -1.9,
      //   speed: 50,
      //   glare: true,
      //   "max-glare": 0.5,
    });
  }, []);
  return (
    <section style={{ overflow: "hidden" }}>
      <div className="hero-banner" ref={tiltRef}>
        <div className="hero-star-1" />
        <div className="hero-star-2" />
        <div className="hero-star-3" />

        <div className="hero-banner-inner">
          <img src={Hero_Banner} alt="hero" loading="lazy" />
        </div>
        <div className="hero-banner-content">
          <div className="inner">
            <h1>
              <span>
                Access the world’s
                <br />
                blockchain data
              </span>
            </h1>

            <div style={{ height: "52px", marginTop: "48px" }}>
              <p>getStart</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
