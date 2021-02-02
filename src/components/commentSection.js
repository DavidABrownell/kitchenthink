import React from 'react'
import PropTypes from 'prop-types'
import Reply from './reply'
import Like from './like'

const CommentSection = ({ webMentions }) => {
    const likes = webMentions.filter(({ node }) => node.likeOf)
    const numLikes = likes.length
    const replies = webMentions.filter(({ node }) => node.inReplyTo)
    const numReplies = replies.length

    return (
        <div className="comments-section">
            <h2>
                {numLikes} {numLikes === 1 ? 'Like' : 'Likes'}
            </h2>

            <div className="likes-container">
                {likes.map(({ node }, index) => {
                    return <Like node={node} key={index} />
                })}
            </div>

            <h2>
                {numReplies} {numReplies === 1 ? 'Reply' : 'Replies'}:
            </h2>

            {numReplies > 0 ? (
                replies.map(({ node }, index) => {
                    return <Reply node={node} key={index} />
                })
            ) : (
                <p>No Replies.</p>
            )}
        </div>
    )
}

CommentSection.propTypes = {
    webMentions: PropTypes.array.isRequired,
}

export default CommentSection
