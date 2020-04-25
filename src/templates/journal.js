import React from 'react';
import LayoutGeneral from '../components/layout-general';
import { graphql } from 'gatsby'


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
        }
        html
    }
    }
`

const journal = (props) => {
    return(
        // <LayoutGeneral>
        //     testing doang
        // </LayoutGeneral>
        <div>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </div>
    )
}

export default journal