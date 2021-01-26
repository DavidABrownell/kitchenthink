import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import BlogPreview from '../components/blogPreview'

const Blog = () => {
    const query = useStaticQuery(graphql`
        query {
            allSitePage(filter: { path: { glob: "/blog/*" } }) {
                nodes {
                    context {
                        title
                        isoDate
                        friendlyDate
                        excerpt
                        slug
                    }
                    path
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Blog" />
            {query.allSitePage.nodes.map(
                (
                    {
                        context: {
                            title,
                            isoDate,
                            friendlyDate,
                            excerpt,
                            slug,
                        },
                        path,
                    },
                    index
                ) => {
                    return (
                        <BlogPreview
                            title={title}
                            isoDate={isoDate}
                            friendlyDate={friendlyDate}
                            excerpt={excerpt}
                            slug={slug}
                            path={path}
                            key={index}
                        />
                    )
                }
            )}
        </Layout>
    )
}

export default Blog
