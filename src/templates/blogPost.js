import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import CommentSection from '../components/commentSection'

const BlogPost = ({ data }) => {
    const { markdownRemark, allWebMentionEntry } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    const { title, isoDate, friendlyDate } = frontmatter
    const webMentions = allWebMentionEntry.edges

    return (
        <Layout>
            <SEO title={title} />
            <article className="h-entry">
                <header>
                    <time dateTime={isoDate} className="post-date dt-published">
                        {friendlyDate}
                    </time>
                    <span
                        style={{ fontStyle: 'italic', float: 'right' }}
                        className="p-author"
                    >
                        Ink Brownell
                    </span>
                    <h1 className="p-name">{title}</h1>
                </header>

                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                    className="e-content"
                />
            </article>
            <CommentSection webMentions={webMentions} />
        </Layout>
    )
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired,
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
    }
`

export default BlogPost
