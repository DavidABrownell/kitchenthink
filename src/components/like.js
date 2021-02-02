import React from 'react'
import PropTypes from 'prop-types'

const Like = ({ node }) => {
    const {
        wmTarget,
        wmSource,
        wmProperty,
        wmId,
        type,
        url,
        likeOf,
        isoDate,
        friendlyDate,
        author,
        content,
    } = node

    return (
        <a href={author.url} className="like-a">
            <img
                src={author.photo}
                alt={`${author.name} liked this`}
                className="like-img"
            />
        </a>
    )
}

Like.propTypes = {
    node: PropTypes.object.isRequired,
}

export default Like
