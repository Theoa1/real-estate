import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Treasure" />
      <h1 className="app__header-h1">The Key To Cheap, Amazing, and Healthy Living</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Treasure is an exclusive apartment finder. Treasure provides amazing homes with a fast-growing market value. Our Home is a beauty and an investment.</p>
      <button type="button" className="custom__button"><a href="#about">Who we are</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
