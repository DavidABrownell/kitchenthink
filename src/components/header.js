import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import NavButton from './navbutton'
import SocialMediaButton from './socialMediaButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
                        borderStyle: 'inherit',
                        background: 'inherit',
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
            <h2 className="site-description">
                Ink&nbsp;Brownell &middot;&nbsp;Software&nbsp;Developer
            </h2>
            <nav
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    marginBottom: '1rem',
                }}
            >
                <NavButton to="/blog">Blog</NavButton>
                <NavButton to="/resume">Résumé</NavButton>
                <NavButton to="/projects">Projects</NavButton>
                <NavButton to="/contact">Contact</NavButton>
            </nav>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    marginBottom: '1rem',
                }}
            >
                <SocialMediaButton
                    href="mailto:ink@seattledevelopers.coop"
                    buttonName="Email"
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </SocialMediaButton>
                <SocialMediaButton
                    href="https://github.com/InkBrownell"
                    buttonName="GitHub"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </SocialMediaButton>
                <SocialMediaButton
                    href="https://www.linkedin.com/in/ink-brownell-39146b160/"
                    buttonName="LinkedIn"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </SocialMediaButton>
            </div>
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
