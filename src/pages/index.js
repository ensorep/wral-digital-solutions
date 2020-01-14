import React from 'react';

import MobileMenu from '../components/mobile-menu'
import logo from '../images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEquals} from '@fortawesome/free-solid-svg-icons'


const toggleMenu = () => {
  const menu = document.getElementById('mobile-menu');
  const state = getComputedStyle(menu).getPropertyValue('--mobile-menu-offset');

  if(state !== '0') {
    menu.style.setProperty('--mobile-menu-offset', '0');
    menu.style.setProperty('--menu-overlay-opacity', '1');
  } else {
    menu.style.setProperty('--mobile-menu-offset', '-70vw');
    menu.style.setProperty('--menu-overlay-opacity', '0');
  }
}

export default () => (
    <div id="app">
      <FontAwesomeIcon onClick={toggleMenu} id="icon-menu" icon={faEquals}/>
      <MobileMenu/>
      <div className="overlay"> </div>
      <img className="logo" src={logo} alt="logo"/>
      <span className="award-winning">award winning</span>
      <h4 className="tagline">Web Design + Digital Marketing</h4>
      <button type="button" className="cta_learn-more">Learn more</button>
    </div>
  );

