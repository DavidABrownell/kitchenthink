import React from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'

const CommentSection = ({ webMentions }) => {
    const numComments = webMentions.length
    return (
        <div className="comments-section">
            <h2>{numComments} Comments: </h2>

            {numComments > 0 ? (
                <div className="comment">
                    {webMentions.map((node, index) => {
                        return <Comment node={node} key={index} />
                    })}
                </div>
            ) : (
                <p>No comments.</p>
            )}
        </div>
    )
}

CommentSection.propTypes = {
    webMentions: PropTypes.array.isRequired,
}

export default CommentSection
