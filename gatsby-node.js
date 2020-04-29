const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions


    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node, 
            name: 'slug',
            value: slug
        })
        // console.log(node)
    }
}



// Create pages for journal and photography separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const journalTemplate = path.resolve('./src/templates/journal.js')
    const photographyTemplate = path.resolve('./src/templates/photography.js')
    
    // Individual journals pages
	const journals = graphql(`
    {
        journals: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/src/pages/journal/*.md" } },
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        // Create journal pages
        result.data.journals.edges.forEach(({ node }) => {
            createPage({
                component: journalTemplate,
                path: `/journal/${node.fields.slug}`,
                context: {
                    slug: node.fields.slug
                }
            });
        });
    });

    // Individual photographs pages
    const photographs = graphql(`
        {
            photographs: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { glob: "**/src/pages/photography/*.md" }
                },
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        // Create photography pages
        result.data.photographs.edges.forEach(({ node }) => {
            createPage({
                component: photographyTemplate,
                path: `/photography/${node.fields.slug}`,
                context: {
                    slug: node.fields.slug
                }
            });
        });
    });

    // Return a Promise which would wait for both the queries to resolve
    return Promise.all([journals, photographs]);


    // res.data.allMarkdownRemark.edges.forEach((edge) => {
    //     createPage({
    //         component: journalTemplate,
    //         path: `/journal/${edge.node.fields.slug}`,
    //         context: {
    //             slug : edge.node.fields.slug
    //         }
    //     })
    // })


}