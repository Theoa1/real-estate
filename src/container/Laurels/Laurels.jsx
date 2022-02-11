import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards" id = 'crypt'>
    <div className="app__wrapper_info">
      <SubHeading title="Payments made for everyone" />
      <h1 className="headtext__cormorant">We accept crypto too!!</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>

      <div><button type="button" className="app__laurels__button"><a href="https://oatblockchain.netlify.app/" target="_blank" >Pay with Crypt</a></button></div>
    </div>



    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
