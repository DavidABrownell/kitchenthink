import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

const BlogPreview = ({ title, isoDate, friendlyDate, excerpt, slug, path }) => {
    return (
        <div className="blog-preview">
            <time dateTime={isoDate} className="post-date">
                {friendlyDate}
            </time>
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <Link to={path}>Read More</Link>
        </div>
    )
}

BlogPreview.propTypes = {
    title: PropTypes.string.isRequired,
    isoDate: PropTypes.string.isRequired,
    friendlyDate: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default BlogPreview
