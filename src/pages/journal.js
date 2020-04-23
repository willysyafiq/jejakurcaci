import React from 'react';
import '../components/style.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from '../components/helmet';
import Navbar from '../components/navbar';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import featured2 from '../images/image-2.png';

const JournalList = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            category
                            featuredImage{
                                childImageSharp {
                                    fluid(maxWidth: 1920) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            } 

        }
    `)

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

                <div className="columns is-multiline journal-list">
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return(

                            <div className="column is-3">
                                <div className="card-image">
                                    <Link to="/post">
                                        <Img className="image"  fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <Link to="/post">
                                        <p className="proj-cat">{edge.node.frontmatter.category}</p>
                                        <p className="proj-title">
                                            {edge.node.frontmatter.title}
                                        </p>
                                    </Link>
                                </div>
                            </div>

                        )
                    })}
                </div>
                        
            </div>
        </div>

    )
}

export default JournalList