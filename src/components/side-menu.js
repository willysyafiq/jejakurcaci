import React from 'react';
import './style.scss';
import hamburger from '../images/hamburger-white.svg';

const SideMenu = () => (
    <section className="side-menu">
        <div className="section">
            <img className="image menu-icon" src={hamburger} alt="hamburger" />
        </div>
    </section>
);

export default SideMenu;