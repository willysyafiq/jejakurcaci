import React from 'react';
import './style.scss';
import hamburger from '../images/hamburger-white.svg';
import close from '../images/close-white.svg';
import { slide as Menu } from 'react-burger-menu';
import featured1 from '../images/image-1.png';
import chevronRight from '../images/chevron-right.svg';
import { Link } from 'gatsby';

const SideMenu = () => (
    <section>
        {/* <a className="hamburger-sidebar"> 
            <img className="image menu-icon" src={hamburger} alt="hamburger" />
        </a> */}
        <Menu width={'100%'} customBurgerIcon={ <img src={hamburger} /> } customCrossIcon={ <img src={close} /> }>
            <div className="columns">
                <div className="column is-8 first-half">
                    <ul>
                        <li>
                            <a href="#">LOVE STORIES</a>
                            <div className="menu-sub">
                                <div className="columns">
                                    <div className="column is-7">
                                        <ul>
                                            <li><a href="#">Couples and Lovebirds <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                            <li><a href="#">Ceremonials <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                            <li><a href="#">Tying the Knot <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                            <li><a href="#">Folks and Families <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="column is-5">
                                    <Link to="/" className="block-highlight">
                                        <img className="image" src={featured1} alt="thumbnail" />
                                        <p className="highlight">HIGHLIGHT</p>
                                        <p to="" className="title">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit</p>
                                        <Link to="/" className="read-more">READ MORE</Link>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">PROJECTS</a>
                            <div className="menu-sub">
                                <div className="columns">
                                    <div className="column is-7">
                                        <ul>
                                            <li><a href="#">Editorials <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                            <li><a href="#">Portraits <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                            <li><a href="#">Wanderlust <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                            <li><a href="#">Miscellanous <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="column is-5">
                                    <Link to="/" className="block-highlight">
                                        <img className="image" src={featured1} alt="thumbnail" />
                                        <p className="highlight">HIGHLIGHT</p>
                                        <p to="" className="title">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit</p>
                                        <Link to="/" className="read-more">READ MORE</Link>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">JOURNAL</a>
                            <div className="menu-sub">
                                <div className="columns">
                                    <div className="column is-7">
                                        <ul>
                                            <li><a href="#">Pople <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                            <li><a href="#">Places <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                            <li><a href="#">Other Stories <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="column is-5">
                                    <Link to="/" className="block-highlight">
                                        <img className="image" src={featured1} alt="thumbnail" />
                                        <p className="highlight">HIGHLIGHT</p>
                                        <p to="" className="title">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit</p>
                                        <Link to="/" className="read-more">READ MORE</Link>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a className="no-bot-border"  href="#">ABOUT</a>
                        </li>
                    </ul>       
                </div>
                <div className="column is-3 second-half">
                    {/* <img className="image" src={featured1} alt="thumbnail" /> */}
                </div>
            </div>
        </Menu>
    </section>
);

export default SideMenu;