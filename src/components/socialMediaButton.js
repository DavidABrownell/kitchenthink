import React from 'react'
import * as PropTypes from 'prop-types'

const SocialMediaButton = ({ href, children }) => {
    return (
        <a
            href={href}
            rel="me noopener noreferrer"
            className="social-media-button"
        >
            {children}
        </a>
    )
}
SocialMediaButton.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

export default SocialMediaButton
