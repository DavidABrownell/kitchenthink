import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ node }) => {
    // Schema:
    // node {
    //   wmTarget
    //   wmSource
    //   wmProperty
    //   wmId
    //   type
    //   url
    //   likeOf
    //   author {
    //     url
    //     type
    //     photo
    //     name
    //   }
    //   content {
    //     text
    //   }
    // }

    const {
        wmTarget,
        wmSource,
        wmProperty,
        wmId,
        type,
        url,
        likeOf,
        author,
        content,
    } = node

    return (
        <div className="comment">
            <img src={author.photo} alt={`${author.name} profile picture`} />
            <h4>
                <a href={author.url}>{author.name}</a>
            </h4>
            <a href={url}>Source</a>
            {content.text}
        </div>
    )
}

Comment.propTypes = {
    node: PropTypes.object.isRequired,
}

export default Comment
