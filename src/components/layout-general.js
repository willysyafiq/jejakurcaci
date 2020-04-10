import React from 'react';
import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import SideMenu from './side-menu';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import HeroSlider from './hero-slider';
import Image1 from '../images/jejakurcaci_masami_daiki_couplesession-3.jpg';

const LayoutGeneral = ({ children }) => (
    <div className="columns is-gapless">
        <div className="column side-menu">
            <SideMenu/>
        </div>	
        <div className="column is-rest">	
            <section className="hero">
                <Helmet />
                <Navbar></Navbar>
                <section className="columns">
                    <div className="column is-12 post-title">
                        <p>Love Stories → Couples & Lovebirds</p>
                        <h1>Masami & Daiki<br/>Gaienmae, Japan, 2019</h1>
                    </div>  
                </section>
                <section className="columns is-centered">
                    <div className="column is-10">
                        <img className="featured-image" src={Image1} alt="Arrow Right" />	
                        <div className="columns">
                            <div className="column is-6">
                                <p className="proj-date">MONDAY, FEBRUARY 31, 2020</p>
                                <p className="proj-hour">16:30</p>
                            </div>
                            <div className="column is-6">
                                <p className="author">Dani Effendi</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-8 body-post">
                        <p>On one fine afternoon in Tokyo, I had a pleasant chance to take a walk with a lovely couple, Masami and Daiki, all the way from Gaienmae to Meiji Jingu. It was rather spontaneous and we had no specific destination - we decided to let the universe do its magic on us. But apparently, sometimes the best plan is having no plan at all because we accidentally discovered so many cute places and ended up with so many wonderful pictures! It was a 2 km walk, but we had so much fun that it didn't feel the slightest bit exhausting!</p>
<br/><p>During our pleasant walk to Meiji Jingu, we happened to pass by a playground. We decided to stop by for a bit since we had no particular destination anyway, and I also suggested that the playground would make a cute backdrop for Masami and Daiki's couple pictures.
Turned out, they were more than happy to! It was as if they were back into the child versions of themselves. I think they enjoyed the swing set the most, which you can see in the pictures. Well, it must be really nice to embrace our inner child once in a while!
</p>
                            </div>
                        </div>

                        
                    </div>
                </section>


            </section>
            
        </div>
    </div>
)

export default LayoutGeneral;