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
        name,
        author,
        content,
        isoDate,
        friendlyDate,
    } = node

    return (
        <div className="reply p-comment h-cite">
            <div className="reply-header">
                <img
                    src={author.photo}
                    alt={`${author.name} profile picture`}
                    className="reply-profile-picture"
                />

                <div>
                    <a
                        href={author.url}
                        className="reply-name p-author h-card u-url"
                    >
                        {author.name}
                    </a>
                    <a href={url} className="reply-source u-url u-uid">
                        Source
                    </a>
                </div>
                <time
                    className="post-date dt-published"
                    dateTime={isoDate}
                    style={{ marginLeft: '2rem' }}
                >
                    {friendlyDate}
                </time>
            </div>
            <h3 className="p-name">{name}</h3>
            <span className="p-content">{content.text}</span>
        </div>
    )
}

Reply.propTypes = {
    node: PropTypes.object.isRequired,
}

export default Reply
