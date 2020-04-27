import React from 'react';
import '../components/style.scss';
import { Link } from 'gatsby';
import Image1 from '../images/article/jejakurcaci_masami_daiki_couplesession-4.jpg';

const NextJournal = () => (

    <div className="columns is-centered is-multiline read-next">
        <div className="column is-10">
            <section className="read-next-title">
                <div className="level featured-heading">
                    <div className="level-left">
                        <h2 className="is-size-2 level-item group-list-title">Read Next</h2>
                    </div>
                </div>
            </section>

            <div className="columns read-next-thumbnail">
                <div className="column is-4">
                    <div className="card-image">
                        <div className="image">
                            <Link to="/post">
                                <img src={Image1} alt=""></img>
                            </Link>
                        </div>
                    </div>
                    <div className="card card-content">
                        <p className="proj-cat">PROJECTS → EDITORIALS</p>
                        <p className="proj-title">
                        Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit
                        </p>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="card-image">
                        <div className="image">
                            <Link to="/post">
                                <img src={Image1} alt=""></img>
                            </Link>
                        </div>
                    </div>
                    <div className="card card-content">
                        <p className="proj-cat">PROJECTS → EDITORIALS</p>
                        <p className="proj-title">
                        Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit
                        </p>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="card-image">
                        <div className="image">
                            <Link to="/post">
                                <img src={Image1} alt=""></img>
                            </Link>
                        </div>
                    </div>
                    <div className="card card-content">
                        <p className="proj-cat">PROJECTS → EDITORIALS</p>
                        <p className="proj-title">
                        Lorem Ipsum Dolor Sit Amet,Consectetur Adipiscing Elit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default NextJournal