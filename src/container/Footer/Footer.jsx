import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 720-725-7186</p>
        <p className="p__opensans">+1 123-456-7890</p>
        <button type="button" className="custom__button"><a href="https://oatchat.netlify.app/" target="_blank" >Chat Now</a></button>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find your home is to let trasure help.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook><a href="https://www.facebook.com/" target="_blank" ></a></FiFacebook>
          <FiTwitter ><a href="https://twitter.com/theo_0a?s=11" target="_blank" ></a></FiTwitter>
          <FiInstagram><a href="https://www.instagram.com/theo.0a" target="_blank" ></a></FiInstagram>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Oatportfolio. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
