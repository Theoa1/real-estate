import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">What's Treasure</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Treasure is a platform for finding the best affordable houses while providing you with the best payment rate. Our house finder helps you sort houses according to your preferences.</p>
        <button type="button" className="custom__button"><a href="https://treasureinc.vercel.app/" target ="_blank" >View Homes</a></button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Extra Services</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Treasure has a store with the best and cheapest furniture to make your home complete. And guess what delivery is free in 8 states and less than 50$ in the other states.</p>
        <button type="button" className="custom__button"><a href="https://treasure-daba61.webflow.io/" target ="_blank" >View Store</a></button>
      </div>
    </div>
  </div>
);

export default AboutUs;
