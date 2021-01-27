import React from 'react'
import * as PropTypes from 'prop-types'

const SocialMediaButton = ({ href, buttonName, children }) => {
    return (
        <a
            href={href}
            rel="me noopener noreferrer"
            className="social-media-button"
            aria-label={buttonName}
        >
            {children}
        </a>
    )
}
SocialMediaButton.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    buttonName: PropTypes.string.isRequired,
}

export default SocialMediaButton
