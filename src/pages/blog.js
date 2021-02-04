import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import BlogPreview from '../components/blogPreview'

const Blog = () => {
    const query = useStaticQuery(graphql`
        query BlogPosts {
            allSitePage(
                filter: { path: { glob: "/blog/*" } }
                sort: { fields: [context___isoDate], order: DESC }
            ) {
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
            <h1>Blog Posts</h1>
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
            <div
                style={{
                    textAlign: 'center',
                    fontStyle: 'italic',
                    fontWeight: 'lighter',
                }}
            >
                fin
            </div>
        </Layout>
    )
}

export default Blog
