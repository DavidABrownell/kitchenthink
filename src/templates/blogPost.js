import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const BlogPost = ({ data }) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    const { title, slug, isoDate, friendlyDate } = frontmatter

    return (
        <Layout>
            <SEO title={title} />
            <article className="h-entry">
                <header>
                    <time dateTime={isoDate} className="post-date dt-published">
                        {friendlyDate}
                    </time>
                    <h1 className="p-name">{title}</h1>
                    <span className="p-author">Ink Brownell</span>
                </header>

                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                    className="e-content"
                />
            </article>
        </Layout>
    )
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                isoDate: date(formatString: "YYYY-MM-DD")
                friendlyDate: date(formatString: "MMMM Do, YYYY")
                slug
                title
            }
        }
    }
`

export default BlogPost
