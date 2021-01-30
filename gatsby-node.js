exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = require.resolve(`./src/templates/blogPost.js`)
    const result = await graphql(`
        query {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                            isoDate: date(formatString: "YYYY-MM-DD")
                            friendlyDate: date(formatString: "MMMM Do, YYYY")
                            title
                        }
                        excerpt(pruneLength: 140)
                    }
                }
            }
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const path = `blog/${node.frontmatter.slug}`
        const permalink = `${result.data.site.siteMetadata.siteUrl}/${path}`
        createPage({
            path: path,
            component: blogPostTemplate,
            context: {
                excerpt: node.excerpt,
                slug: node.frontmatter.slug,
                permalink: permalink,
                isoDate: node.frontmatter.isoDate,
                friendlyDate: node.frontmatter.friendlyDate,
                title: node.frontmatter.title,
            },
        })
    })
}
