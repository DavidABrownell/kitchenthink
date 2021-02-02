import React from 'react'
import PropTypes from 'prop-types'

const Reply = ({ node }) => {
    // Schema:
    // node {
    //   wmTarget
    //   wmSource
    //   wmProperty
    //   wmId
    //   type
    //   url
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
        author,
        content,
        isoDate,
        friendlyDate,
    } = node

    return (
        <div className="reply">
            <div className="reply-header">
                <img
                    src={author.photo}
                    alt={`${author.name} profile picture`}
                    className="reply-profile-picture"
                />

                <div>
                    <a href={author.url} className="reply-name">
                        {author.name}
                    </a>
                    <a href={url} className="reply-source">
                        Source
                    </a>
                </div>
                <time
                    className="post-date"
                    dateTime={isoDate}
                    style={{ marginLeft: '2rem' }}
                >
                    {friendlyDate}
                </time>
            </div>
            {content.text}
        </div>
    )
}

Reply.propTypes = {
    node: PropTypes.object.isRequired,
}

export default Reply
