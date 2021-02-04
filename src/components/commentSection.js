import React from 'react'
import PropTypes from 'prop-types'
import Reply from './reply'
import Like from './like'

const CommentSection = ({ webMentions }) => {
    const likes = webMentions.filter(
        ({ node }) => node.likeOf === node.wmTarget
    )
    const numLikes = likes.length
    const replies = webMentions.filter(({ node }) => node.inReplyTo)
    const numReplies = replies.length

    return (
        <div className="comments-section">
            <p>
                My blog supports{' '}
                <a
                    href="https://indieweb.org/Webmention"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Webmentions
                </a>
                ! There are a few ways to show up below. If you want to leave a
                comment, you can reply to any of the syndicated copies above
                (on, for example, Twitter), and your reply will be reproduced
                here. Alternately, if you want to reply anonymously, you can use{' '}
                <a
                    href="https://commentpara.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    comment parade
                </a>
                . Finally, if you have publishing software that supports sending
                Webmentions, you can send a mention to this post&apos;s URL!
            </p>
            <h2>
                {numLikes} {numLikes === 1 ? 'Like' : 'Likes'}
            </h2>

            <div className="likes-container">
                {likes.map(({ node }, index) => {
                    return <Like node={node} key={index} />
                })}
            </div>

            <h2>
                {numReplies} {numReplies === 1 ? 'Reply' : 'Replies'}
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
