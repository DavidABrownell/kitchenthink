exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = require.resolve(`./src/components/blogPost.js`)
    const result = await graphql(`
        {
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
        }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `blog/${node.frontmatter.slug}`,
            component: blogPostTemplate,
            context: {
                excerpt: node.excerpt,
                slug: node.frontmatter.slug,
                isoDate: node.frontmatter.isoDate,
                friendlyDate: node.frontmatter.friendlyDate,
                title: node.frontmatter.title,
            },
        })
    })
}
