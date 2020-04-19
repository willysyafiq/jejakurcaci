import React from 'react';
import './style.scss';
import LayoutCarousel from './layout-carousel';
import SlideShow from "../components/slideshow"

import SearchBlack from '../images/search-black.svg';
import PinterestBlack from '../images/pinterest-black.svg';
import FacebookBlack from '../images/facebook-black.svg';
import InstagramBlack from '../images/instagram-black.svg';
import Image1 from '../images/jejakurcaci_masami_daiki_couplesession-1.jpg';
import Image2 from '../images/jejakurcaci_masami_daiki_couplesession-2.jpg';
import Image3 from '../images/jejakurcaci_masami_daiki_couplesession-3.jpg';
import Image4 from '../images/jejakurcaci_masami_daiki_couplesession-4.jpg';
import Image5 from '../images/jejakurcaci_masami_daiki_couplesession-5.jpg';

const ProjectCarousel = () => (
    <LayoutCarousel>
        {/* <section className="project-carousel">
            <div className="columns no-bot-margin no-top-margin">
                <div className="column is-7">
                    <div className="carousel" aria-label="Gallery">
                    <ol class="carousel__viewport">
                        <li id="carousel__slide1"
                            tabindex="0"
                            class="carousel__slide">
                            <img className="featured-image" src={Image1} alt="Image" />	
                        <div class="carousel__snapper">
                            <a href="#carousel__slide4"
                            class="carousel__prev">Go to last slide</a>
                            <a href="#carousel__slide2"
                            class="carousel__next">Go to next slide</a>
                        </div>
                        </li>
                        <li id="carousel__slide2"
                            tabindex="0"
                            class="carousel__slide">
                            <img className="featured-image" src={Image2} alt="Image" />	
                        <div class="carousel__snapper"></div>
                        <a href="#carousel__slide1"
                            class="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide3"
                            class="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide3"
                            tabindex="0"
                            class="carousel__slide">
                            <img className="featured-image" src={Image3} alt="Image" />
                        <div class="carousel__snapper"></div>
                        <a href="#carousel__slide2"
                            class="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide4"
                            class="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide4"
                            tabindex="0"
                            class="carousel__slide">
                            <img className="featured-image" src={Image4} alt="Image" />
                        <div class="carousel__snapper"></div>
                        <a href="#carousel__slide3"
                            class="carousel__prev">Go to previous slide</a>
                        <a href="#carousel__slide1"
                            class="carousel__next">Go to first slide</a>
                        </li>
                    </ol>
                       
                    </div>
                </div>
                <div className="column is-5">
                    <p className="pages">5<span>/25</span></p>
                    <h1 className="title">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit</h1>
                    <p className="caption">Cat ipsum dolor sit amet, mark territory. Pounce on unsuspecting person murr i hate humans they are so annoying so while happily ignoring when being called for making bread on the bathrobe for show belly. Milk the cow scratch the furniture, and get scared by doggo also cucumerro . Scratch the furniture russian blue fight own tail cereal boxes make for five star accommodation and lick human with sandpaper tongue.</p>
                    <div className="share">
                        <p>SHARE</p>
                        <a href="#">
                            <img className="image social-logo" src={FacebookBlack} alt="Facebook Icon" />
                        </a>
                        <a href="#">
                            <img className="image social-logo" src={PinterestBlack} alt="Pinterest Icon" />
                        </a>
                        <a href="#">
                            <img className="image social-logo" src={InstagramBlack} alt="Instagram Icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section> */}




        <SlideShow></SlideShow>
        
    </LayoutCarousel>
)

export default ProjectCarousel;