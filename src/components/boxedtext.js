import React from 'react'
import PropTypes from 'prop-types'

const BoxedText = ({ text }) => {
    return [...text].map((character, index) => (
        <span className="boxedtext" key={index}>
            {character}
        </span>
    ))
}

BoxedText.propTypes = {
    text: PropTypes.string.isRequired,
}

export default BoxedText
