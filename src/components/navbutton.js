import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavButton = ({ children, to }) => {
    return (
        <Link
            to={to}
            className="nav-button"
            activeClassName="nav-button-current"
        >
            {children}
        </Link>
    )
}

NavButton.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
}

export default NavButton
