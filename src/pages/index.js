import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hello!</h1>
        <p>My name is Ink.</p>
        <p>I&apos;m a software developer who specializes in web development.</p>
    </Layout>
)

export default IndexPage
