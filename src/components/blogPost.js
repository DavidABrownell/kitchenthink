import React from 'react'
import Layout from './layout'
import SEO from './seo'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const BlogPost = ({ data }) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    const { title, slug, isoDate, friendlyDate } = frontmatter

    return (
        <Layout>
            <SEO title={title} />
            <time dateTime={isoDate}>
                <h2>{friendlyDate}</h2>
            </time>
            <h1>{title}</h1>

            <div dangerouslySetInnerHTML={{ __html: html }} />
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
