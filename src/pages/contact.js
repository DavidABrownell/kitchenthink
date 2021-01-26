import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <h1>Contact</h1>
            <ul>
                <li>
                    <a href="mailto:ink@seattledevelopers.coop">Email</a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/ink-brownell-39146b160/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
            For business inquiries, please contact me via email.
        </Layout>
    )
}

export default Contact
