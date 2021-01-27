import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Resume = () => {
    return (
        <Layout>
            <SEO title="Résumé" />

            <h1>Ink Brownell</h1>
            <h2>
                <Link to="/contact">Contact</Link>
            </h2>
            <h2>Experience</h2>
            <ul>
                <li>
                    <strong>Meter Group</strong>&mdash;Pullman, WA <br />
                    <em>
                        <time dateTime="2019-01">January 2019</time>&ndash;
                        <time dateTime="2019-08">August 2019</time>
                    </em>{' '}
                    <br />
                    Software Engineering Intern
                </li>
            </ul>
            <h2>Education</h2>
            <ul>
                <li>
                    <strong>Washington State University</strong>&mdash;Pullman,
                    WA <br />
                    <em>
                        <time dateTime="2018-08">August 2018</time>&ndash;
                        <time dateTime="2020-12">December 2020</time>
                    </em>{' '}
                    <br />
                    Bachelor of Science in Computer Science, Minor in
                    Mathematics
                </li>
                <li>
                    <strong>Bellevue College</strong>&mdash;Bellevue, WA <br />
                    <em>
                        <time dateTime="2016-08">August 2016</time>&ndash;
                        <time dateTime="2018-05">May 2018</time>
                    </em>{' '}
                    <br />
                    Associate of Science in Mechanical Engineering
                </li>
            </ul>
            <h2>
                <Link to="/projects">Projects</Link>
            </h2>
            <h2>Tools & Technologies</h2>
            <ul style={{ lineHeight: '80%', columnCount: 3 }}>
                <li>Python</li>
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>HTML</li>
                <li>Bash</li>
                <li>CSS</li>
                <li>Linux</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Gatsby</li>
            </ul>
        </Layout>
    )
}

export default Resume
