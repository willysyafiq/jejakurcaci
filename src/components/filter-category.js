import React from 'react';
import '../components/style.scss';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

const filterCategory = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(
                filter: {
                    frontmatter: {category: {in: ["Love Stories → Couples & Lovebirds", "Love Stories → Folks & Families"]}}
                },
                limit: 4,
                skip: 1
            ){
                edges{
                    node{
                        frontmatter{
                            title
                            category
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
        <div>
            <div className="column is-12">
                {data.allMarkdownRemark.edges.map((edge) => {
                    return(
                        <span className="filter">
                            {edge.node.frontmatter.title}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default filterCategory