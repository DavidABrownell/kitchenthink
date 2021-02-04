const { getAsync } = require('microformat-node')
const Silos = require('./src/util/silos')
const fetch = require(`node-fetch`)

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
                            isoDate: date
                            friendlyDate: date(
                                formatString: "MMMM Do, YYYY HH:mm"
                            )
                            title
                        }
                        html
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

    const bridgyPages = {}
    await Promise.all(
        Silos.map(async silo => {
            const result = await fetch(silo.bridgyUserUrl)
            const html = await result.text()
            bridgyPages[silo] = await getAsync({
                html: html,
            })
        })
    )

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const path = `blog/${node.frontmatter.slug}/`
        const permalink = `${result.data.site.siteMetadata.siteUrl}/${path}`

        const syndicationUrls = {}
        Silos.forEach(silo => {
            // Ideally I would write this with the optional chaining
            // operator (?.), but it's not supported by default even
            // in Node 14. Thus the ugly if's.
            // https://stackoverflow.com/questions/63965394/why-is-optional-chaining-not-working-in-my-node-repl
            let result = bridgyPages[silo]
            if (result) {
                // The Bridgy page fetches successfully
                result = result.items[0].children.filter(
                    item =>
                        item.type.includes('h-bridgy-publish') &&
                        item.type.includes(silo.bridgyMicroformatTag) &&
                        item.properties.url[0] === permalink
                )[0]
            }
            if (result) {
                // The page includes a syndicate link
                result = result.properties.syndication[0]
            }
            syndicationUrls[silo] = result
        })

        createPage({
            path: path,
            component: blogPostTemplate,
            context: {
                syndicationUrls: syndicationUrls,
                excerpt: node.excerpt,
                slug: node.frontmatter.slug,
                permalink: permalink,
                isoDate: node.frontmatter.isoDate,
                friendlyDate: node.frontmatter.friendlyDate,
                title: node.frontmatter.title,
                html: node.html,
            },
        })
    })
}
