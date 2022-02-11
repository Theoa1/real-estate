import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="CEO's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Good accomodation is a treasure for you and your family.</p>
        </div>
        <p className="p__opensans"> At Treasures, we believe that a good house is not just a beautiful building but good sleep, a beautiful and safe community, a cheap price, flexible payments, and good sleep. We ensure our customers have it all </p>
      </div>

      <div className="app__chef-sign">
        <p>Theo Arthur</p>
        <p className="p__opensans">CEO & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
