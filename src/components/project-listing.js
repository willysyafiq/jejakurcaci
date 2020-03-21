import React from 'react';
import './style.scss';
import featured1 from '../images/image-1.png';
import featured2 from '../images/image-2.png';
import featured3 from '../images/image-3.png';
import featured4 from '../images/image-4.png';
import featured5 from '../images/image-5.png';
import { FaArrowRight } from 'react-icons/fa';

const ProjectListing = () => (
	
    <section className="section project-listing">
        <div className="level featured-heading">
            <div className="level-left">
                <h2 className="is-size-2 level-item">Recent Works</h2>
            </div>
            <div className="level-right">
                <button class="button is-normal level-item">
                    <span>ALL PHOTOGRAPHY</span>
                    <span className="icon"><FaArrowRight size="fa-1x" /></span>
                </button>
            </div>
        </div>
        <div className="columns">
            <div className="column is-half">
                <div className="card-image">
                    <div className="image">
                        <img src={featured1} alt=""></img>
                    </div>
                </div>
                <div className="card card-content">
                    <p className="proj-cat">PROJECTS → MISCELLANEOUS</p>
                    <p className="featured-proj-title">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
                    </p>
                </div>
            </div>
            <div className="column">
                <div className="columns">
                    <div className="column">
                        <div className="card-image">
                            <div className="image">
                                <img src={featured2} alt=""></img>
                            </div>
                        </div>
                        <div className="card card-content">
                            <p className="proj-cat">PROJECTS → MISCELLANEOUS</p>
                            <p className="proj-title">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
                            </p>
                        </div>
                        <div className="card-image">
                            <div className="image">
                                <img src={featured3} alt=""></img>
                            </div>
                        </div>
                        <div className="card card-content">
                            <p className="proj-cat">PROJECTS → MISCELLANEOUS</p>
                            <p className="proj-title">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card-image">
                            <div className="image">
                                <img src={featured4} alt=""></img>
                            </div>
                        </div>
                        <div className="card card-content">
                            <p className="proj-cat">PROJECTS → MISCELLANEOUS</p>
                            <p className="proj-title">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
                            </p>
                        </div>
                        <div className="card-image">
                            <div className="image">
                            <img src={featured5} alt=""></img>
                            </div>
                        </div>
                        <div className="card card-content">
                            <p className="proj-cat">PROJECTS → MISCELLANEOUS</p>
                            <p className="proj-title">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

);

export default ProjectListing;
