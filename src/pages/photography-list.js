import React from 'react';
import '../components/style.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from '../components/helmet';
import Navbar from '../components/navbar';
import SideMenu from '../components/side-menu';
import Footer from '../components/footer';
import { Link } from 'gatsby';
import Img from "gatsby-image";

const PhotographyList = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(
                filter: {
                    frontmatter: {category: {in: ["Love Stories → Couples & Lovebirds"]}}
                }
            ){
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
                        fields{
                            slug
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
                <div className="columns">
                    <div className="column is-12">
                        <nav className="is-hidden-mobile navbar-general">
                            <Navbar/>
                        </nav>
                    </div>
                </div>

                <div className="columns journal-list is-centered">
                    <div className="column is-10">
                        <div className="columns is-multiline">
                        {data.allMarkdownRemark.edges.map((edge) => {
                            return(

                                <div className="column is-4">
                                    <div className="card-image">
                                        <Link to={`/photography/${edge.node.fields.slug}`}>
                                            <Img className="image"  fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}/>
                                        </Link>
                                    </div>
                                    <div className="card-content">
                                        <Link to={`/photography/${edge.node.fields.slug}`}>
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
                <Footer/>
            </div>
        </div>

    )
}

export default PhotographyList