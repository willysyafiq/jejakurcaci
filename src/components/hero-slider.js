import React from 'react';
import './style.scss';
import ArrowLBlack from '../images/arrow-left-black.svg';
import ArrowRBlack from '../images/arrow-right-black.svg';

const HeroSlider = () => ( 
   <div className="hero hero-body">
        <div className="container" id="hero-bottom">
            <div className="columns level">
                <div className="column level-left">
                        <div className="columns is-vcentered is-variable is-7-desktop">
                            <div className="column is-narrow">
                                <img className="image arrow-hero" src={ArrowLBlack} alt="Arrow Left" />
                            </div>
                            <div className="column">
                                <h1 className="hero-title has-text-black">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
                                </h1>
                            </div>
                    </div>
                </div>
                <div className="column level-right">
                    <div className="columns right is-vcentered">
                        <div className="column is-one-quarter">
                            <img className="image arrow-hero" src={ArrowRBlack} alt="Arrow Right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default HeroSlider;