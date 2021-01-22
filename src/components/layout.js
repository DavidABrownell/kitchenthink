/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main
                    style={{
                        background: '#191418',
                        padding: '3rem',
                        borderRadius: '0.5rem',
                    }}
                >
                    {children}
                </main>
                <footer
                    style={{
                        marginTop: `2rem`,
                        textAlign: 'center',
                    }}
                >
                    <p>
                        <a
                            href="https://github.com/InkBrownell/kitchenthink"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Source
                        </a>
                    </p>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
