import React from 'react';
import './style.scss';
import { Link } from 'gatsby';
import LogoFooter from '../images/logo-white-left.svg';

const Footer = () => (
  <footer className="columns is-multiline normalize-multiline-footer">
    <div className="column is-12">
      <img className="image brand-footer" src={LogoFooter} alt="Brand Logo" />	
    </div>
    <div className="column is-3 column-border">
      <h4>LOREM IPSUM</h4>
      <ul>
        <li><Link to="/about">About Jejak Kurcaci</Link></li>
        <li><Link to="/our-services">Our Services</Link></li>
        <li><Link to="/our-services">FAQs</Link></li>
      </ul>
    </div>
    <div className="column is-3 column-border">
      <h4>SOCIAL</h4>
      <ul>
        <li><a href="https://www.instagram.com/jejakkurcaci/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.facebook.com/Jejakurcaci-289920665021670/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://id.pinterest.com/effendidani/jejakurcaci/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
      </ul>
    </div>
    <div className="column is-5 column-border">
      <h3>Got a question?<br/>
  Lorem ipsum dolor sit amet.</h3>
    </div>
    <div className="column is-3 column-border-lower">
      <h4>SITEMAP</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/love-stories">Love Stories</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
    <div className="column is-3 column-border-lower">

    </div>
  </footer>
);

export default Footer;
