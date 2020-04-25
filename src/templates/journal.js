import React from 'react';
import '../components/style.scss';
import { graphql } from 'gatsby'
import Helmet from '../components/helmet';
import Navbar from '../components/navbar';
import SideMenu from '../components/side-menu';
import Img from "gatsby-image";

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

const journal = (props) => {
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
                <div className="columns is-centered no-bot-margin journal">
                    <div className="column is-10">
                        <div className="post-title">
                            <p>{props.data.markdownRemark.frontmatter.category}</p>
                            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                        </div>
                        <div className="featured-image">
                            <Img className="image"  fluid={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid}/>
                        </div>
                        <div className="body-post">
                            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>

    )
}

export default journal