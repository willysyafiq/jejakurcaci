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
        <Menu width={'100%'} customBurgerIcon={ <img src={hamburger} alt="hamburger" /> } customCrossIcon={ <img src={close} alt="close" /> }>
            <div className="columns">
                <div className="column is-8 first-half">
                    <ul>
                        <li>
                            <Link to="#">LOVE STORIES</Link>
                            <div className="menu-sub">
                                <div className="columns">
                                    <div className="column is-7">
                                        <ul>
                                            <li><Link to="/">Couples and Lovebirds <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
                                            <li><Link to="/">Ceremonials <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
                                            <li><Link to="/">Tying the Knot <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
                                            <li><Link to="/">Folks and Families <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
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
                            <Link to="/">PROJECTS</Link>
                            <div className="menu-sub">
                                <div className="columns">
                                    <div className="column is-7">
                                        <ul>
                                            <li><Link to="/">Editorials <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
                                            <li><Link to="/">Portraits <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
                                            <li><Link to="/">Wanderlust <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
                                            <li><Link to="/">Miscellanous <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
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
                            <Link to="/">JOURNAL</Link>
                            <div className="menu-sub">
                                <div className="columns">
                                    <div className="column is-7">
                                        <ul>
                                            <li><Link to="/">Pople <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
                                            <li><Link to="/">Places <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
                                            <li><Link to="/">Other Stories <img className="image chevron-menu" src={chevronRight} alt="chevron right" /></Link></li>
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
                            <Link to="/" className="no-bot-border">ABOUT</Link>
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