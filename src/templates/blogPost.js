import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import CommentSection from '../components/commentSection'
import PosseLinks from '../components/posseLinks'

const BlogPost = ({ data }) => {
    const siteUrl = data.site.siteMetadata.siteUrl

    const { markdownRemark, allWebMentionEntry } = data // data.markdownRemark holds your post data
    const { frontmatter, html, excerpt } = markdownRemark
    const { title, isoDate, friendlyDate, slug } = frontmatter
    const path = `/blog/${slug}/`
    const webMentions = allWebMentionEntry.edges

    return (
        <Layout>
            <SEO title={title} />
            <article className="h-entry">
                <header>
                    <time dateTime={isoDate} className="post-date dt-published">
                        {friendlyDate}
                    </time>
                    <a
                        href={siteUrl}
                        style={{ fontStyle: 'italic', float: 'right' }}
                        className="p-author"
                    >
                        Ink Brownell
                    </a>
                    <h1 className="p-name">
                        <Link to={path} className="u-url u-uid">
                            {title}
                        </Link>
                    </h1>
                </header>
                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                    className="e-content"
                />
                <PosseLinks />
            </article>
            <CommentSection webMentions={webMentions} />
        </Layout>
    )
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired,
    permalink: PropTypes.string.isRequired,
}

export const pageQuery = graphql`
    query($slug: String!, $permalink: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                isoDate: date
                friendlyDate: date(formatString: "MMMM Do, YYYY HH:mm")
                slug
                title
            }
            excerpt
        }
        allWebMentionEntry(
            filter: { wmTarget: { eq: $permalink } }
            sort: { order: DESC, fields: [published] }
        ) {
            edges {
                node {
                    wmTarget
                    wmSource
                    wmProperty
                    wmId
                    type
                    url
                    name
                    likeOf
                    inReplyTo
                    isoDate: published
                    friendlyDate: published(formatString: "MMMM Do, YYYY HH:mm")
                    author {
                        url
                        type
                        photo
                        name
                    }
                    content {
                        text
                    }
                }
            }
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`

export default BlogPost
