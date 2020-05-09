import React from 'react';
import '../components/style.scss';
import { graphql } from 'gatsby'
import Helmet from '../components/helmet';
import Navbar from '../components/navbar';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';
import Img from "gatsby-image";
import { Link } from 'gatsby';
import ArrowRBlack from '../images/arrow-right-black.svg';
import NextPhotography from "../components/next-photography.js";
import Image1 from '../images/article/jejakurcaci_masami_daiki_couplesession-3.jpg';


export const query = graphql`
    query(
        $slug: String!
    )
    {
    markdownRemark(
        fields:{
            slug:{
                eq: $slug
            }
        }
    )
    {
        frontmatter{
            title
            category
            quote
            tags
            featuredImage{
                childImageSharp {
                    fluid(maxWidth: 700, quality: 80) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        html
    }
    }
`

const photography = (props) => {
    return(

        <div className="columns is-gapless">
            <div className="column side-menu">
                <SideMenu/>
            </div>	
            <div className="column is-rest">	
                <Helmet />
                <nav className="is-hidden-mobile navbar-general">
                    <Navbar/>
                </nav>
                <div className="columns is-multiline is-centered no-bot-margin photography">
                    <div className="column is-10">
                        <div className="post-title">
                            <p>{props.data.markdownRemark.frontmatter.category}</p>
                            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                        </div>
                        <div className="featured-image">
                            <Img className="image"  fluid={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid}/>
                        </div>
                        <div className="columns border-author">
                            <div className="column is-6">
                                <p className="proj-date">MONDAY, FEBRUARY 31, 2020</p>
                                <p className="proj-hour">16:30</p>
                            </div>
                            <div className="column is-6">
                                <p className="author">Dani Effendi</p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-8">
                        <p className="quote">{props.data.markdownRemark.frontmatter.quote}</p>
                    </div>
                    <div className="column is-10">
                        <div className="columns border-gallery-thumb">
                            <div className="column is-5">
                                <h3 className="second-post-title">Masami & Daiki <br /> Gaienmae, Japan, 2019</h3>
                            </div>
                            <div className="column is-7 thumbnail-gallery no-bot-padding">
                                <div className="columns">
                                    <div className="column is-6 no-bot-padding">
                                        <p className="gallery-title">GALLERY</p>
                                    </div>
                                    <div className="column is-6 no-bot-padding">
                                        <p className="images-count">35 IMAGES</p>
                                    </div>
                                </div>
                                <div className="columns is-multiline">
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <img className="image" src={Image1} alt="Thumbnail" />
                                    </div>
                                    <div className="column is-4">
                                        <div className="see-all-thumb">
                                            <div className="columns">
                                                <div className="column is-8">
                                                    <div>
                                                        <Link to="/carousel" data-target="modal">See All Images</Link> 
                                                    </div>
                                                </div>
                                                <div className="column is-4">
                                                    <img className="image" src={ArrowRBlack} alt="Arrow Right" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-7 body-post">
                        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                    </div>  
                    <div className="column is-10 border-tag">
                        <div class="tags">
                            <span class="tag">                    
                                {props.data.markdownRemark.frontmatter.tags}
                            </span>
                        </div>
                    </div>

                    <NextPhotography/>

                </div>
                
                    <Footer/>

            </div>
        </div>
 
    )
}

export default photography