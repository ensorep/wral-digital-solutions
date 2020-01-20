import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav id="mobile-menu" className="mobile-menu">
    <ul className="mobile-menu_list">
      {/* <Link to='/' className="mobile-menu_link">Home</Link> */}
      <Link to='/' className="mobile-menu_link">About</Link>
      <Link to='/' className="mobile-menu_link">Services</Link>
      <Link to='/' className="mobile-menu_link">Our Work</Link>
      <Link to='/' className="mobile-menu_link">Contact</Link>
      <Link to='/' className="mobile-menu_link">Blog</Link>
    </ul>
  </nav>
)