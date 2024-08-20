import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3 className="midtext">{heroBanner.midText}</h3>
        <h1 className="largetext">{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="Ladies-bags"
          className="hero-banner-image"
        />
        <div>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
