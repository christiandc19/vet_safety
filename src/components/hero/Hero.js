import React from "react";

import Zoom from 'react-reveal/Zoom';

import "./Hero.css";

const Hero = () => {
  return (
    <>
<figure>

	<div class="imagesContainer">

  <div className="hero-caption">
  <Zoom duration={1000}>
    <p>WELCOME TO</p>
    </Zoom>
    <Zoom duration={3000}>
      <h1>VET SAFETY NET</h1>
    </Zoom>

    <Zoom duration={5000}>
    <h2>Restoring Heroes, Rebuilding Lives: A Rehab Haven for Veterans</h2>
    </Zoom>


    <Zoom duration={5000}>
        <a href="tel:9097399620"><h3>+1  (323) 638-5904</h3> </a>
    </Zoom>


  </div>


		<div class="imageDiv image1">
    </div>
		<div class="imageDiv image2 fadeInClass"></div>
	</div>
</figure>
    </>
  );
};

export default Hero;
