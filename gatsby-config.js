module.exports = {
    siteMetadata: {
        title: `kitchenth.ink`,
        description: `Ink's personal website.`,
        author: `Ink Brownell`,
        siteUrl: 'https://kitchenth.ink',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/cms/blog`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-smartypants`],
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [
                    {
                        userAgent: '*',
                        allow: '/',
                        disallow: '',
                        crawlDelay: 2,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                modulePath: `${__dirname}/netlify-cms-config.js`,
            },
        },
        `gatsby-plugin-fontawesome-css`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Kitchenthink`,
                short_name: `KT`,
                start_url: `/`,
                background_color: `#ea4836`,
                theme_color: `#ea4836`,
                display: `standalone`,
                icon: `${__dirname}/src/images/kitchenthink.svg`,
            },
        },
        {
            resolve: `gatsby-plugin-webmention`,
            options: {
                username: 'kitchenth.ink', // webmention.io username
                identity: {
                    github: 'InkBrownell',
                    email: 'ink@seattledevelopers.coop',
                    twitter: 'InkBrownell',
                },
                mentions: true,
                pingbacks: true,
                domain: 'kitchenth.ink',
                token: process.env.WEBMENTIONS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                site_url: siteUrl
                            }
                        }
                    }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign(
                                    {},
                                    edge.node.frontmatter,
                                    {
                                        description: edge.node.excerpt,
                                        date: edge.node.frontmatter.isoDate,
                                        url: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}/`,
                                        guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}/`,
                                        custom_elements: [
                                            {
                                                'content:encoded':
                                                    edge.node.html,
                                            },
                                        ],
                                    }
                                )
                            })
                        },
                        query: `
                            query {
                                allMarkdownRemark(
                                    sort: { order: DESC, fields: [frontmatter___date] }
                                    limit: 1000
                                ) {
                                    edges {
                                        node {
                                            html
                                            frontmatter {
                                                slug
                                                isoDate: date
                                                friendlyDate: date(
                                                    formatString: "MMMM Do, YYYY HH:mm"
                                                )
                                                title
                                            }
                                            excerpt(pruneLength: 140)
                                        }
                                    }
                                }
                            }
                        `,
                        output: '/blog/rss.xml',
                        title: "Your Site's RSS Feed",
                    },
                ],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
