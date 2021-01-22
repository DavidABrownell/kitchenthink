import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import BoxedText from './boxedtext'

const Header = ({ siteTitle }) => (
    <header
        style={{
            background: `#191418`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 className="site-title">
                <Link
                    to="/"
                    style={{
                        textDecoration: `none`,
                        color: 'inherit',
                    }}
                >
                    <BoxedText text={siteTitle} />
                </Link>
                <span className="site-name">abcdefg</span>
            </h1>
            <h2 className="site-description">abcdefg</h2>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
