import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import NavButton from './navbutton'

const Header = ({ siteTitle }) => (
    <header>
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
                    {siteTitle}
                </Link>
            </h1>
            <h2 className="site-description">
                Ink Brownell &bull; Software Developer
            </h2>
            <nav
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '1rem',
                }}
            >
                <NavButton to="/blog">Blog</NavButton>
                <NavButton to="/resume">Résumé</NavButton>
                <NavButton to="/projects">Projects</NavButton>
                <NavButton to="/contact">Contact</NavButton>
            </nav>
            <hr />
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
