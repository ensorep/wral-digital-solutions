import React from 'react';
import logo from '../images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEquals} from '@fortawesome/free-solid-svg-icons'
export default () => (
    <div id="app">
      <FontAwesomeIcon id="menu" icon={faEquals}/>
      <div className="overlay"> </div>
      <img className="logo" src={logo} alt="logo"/>
      <span className="award-winning">award winning</span>
      <h4 className="tagline">Web Design + Digital Marketing</h4>
      <button type="button" className="cta_learn-more">Learn more</button>
    </div>
  );

