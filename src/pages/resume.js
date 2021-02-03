import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Resume = () => {
    return (
        <Layout>
            <div className="h-resume">
                <SEO title="Résumé" />

                <h1 className="p-name">Ink Brownell</h1>
                <div className="p-contact h-card">
                    <h2>
                        <Link to="/contact/">Contact</Link>
                    </h2>
                    <ul>
                        <li>
                            Email:{' '}
                            <a
                                href="mailto:ink@softwaredevelopers.coop"
                                className="u-email"
                            >
                                ink@softwaredevelopers.coop
                            </a>
                        </li>
                    </ul>
                </div>
                <h2>Experience</h2>
                <ul>
                    <li className="p-experience h-event">
                        <div className="h-card">
                            <strong>
                                <a
                                    href="https://www.metergroup.com/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="p-name p-org u-url"
                                >
                                    Meter Group
                                </a>
                            </strong>
                            &mdash;<span className="p-locality">Pullman</span>,{' '}
                            <span className="p-region">WA</span>
                        </div>
                        <em className="">
                            <time dateTime="2019-01" className="dt-start">
                                January 2019
                            </time>
                            &ndash;
                            <time dateTime="2019-08" className="dt-end">
                                August 2019
                            </time>
                        </em>{' '}
                        <br />
                        Software Engineering Intern
                    </li>
                </ul>
                <h2>Education</h2>
                <ul>
                    <li className="p-education">
                        <div className="h-card">
                            <strong>
                                <a
                                    href="https://wsu.edu/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="p-name p-org u-url"
                                >
                                    Washington State University
                                </a>
                            </strong>
                            &mdash;<span className="p-locality">Pullman</span>,{' '}
                            <span className="p-region">WA</span>
                        </div>
                        <div>
                            <em>
                                <time dateTime="2018-08" className="dt-start">
                                    August 2018
                                </time>
                                &ndash;
                                <time dateTime="2020-12" className="dt-end">
                                    December 2020
                                </time>
                            </em>
                        </div>
                        <span className="p-summary">
                            Bachelor of Science in Computer Science,{' '}
                            <i lang="la">magna cum laude</i>
                        </span>
                    </li>
                    <li className="p-education">
                        <div>
                            <strong>
                                <a
                                    href="https://www.bellevuecollege.edu/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="p-name p-org u-url"
                                >
                                    Bellevue College
                                </a>
                            </strong>
                            &mdash;<span className="p-locality">Bellevue</span>,{' '}
                            <span className="p-region">WA</span>
                        </div>
                        <div>
                            <em>
                                <time dateTime="2016-08" className="dt-start">
                                    August 2016
                                </time>
                                &ndash;
                                <time dateTime="2018-05" className="dt-end">
                                    May 2018
                                </time>
                            </em>
                        </div>
                        <span className="p-summary">
                            Associate of Science in Mechanical Engineering
                        </span>
                    </li>
                </ul>
                <h2>Awards</h2>
                <ul>
                    <li>
                        <div>
                            <strong>
                                WSU CptS 423 Fall 2020 Senior Design Competition
                            </strong>
                        </div>
                        <em>
                            1<sup>st</sup> place
                        </em>
                    </li>
                </ul>
                <h2>
                    <Link to="/projects/">Projects</Link>
                </h2>
                <h2>Tools & Technologies</h2>
                <ul style={{ lineHeight: '80%', columnCount: 3 }}>
                    <li className="p-skill">Python</li>
                    <li className="p-skill">Django</li>
                    <li className="p-skill">PostgreSQL</li>
                    <li className="p-skill">Git</li>
                    <li className="p-skill">HTML</li>
                    <li className="p-skill">Bash</li>
                    <li className="p-skill">CSS</li>
                    <li className="p-skill">Linux</li>
                    <li className="p-skill">JavaScript</li>
                    <li className="p-skill">React.js</li>
                    <li className="p-skill">MongoDB</li>
                    <li className="p-skill">Express.js</li>
                    <li className="p-skill">Gatsby</li>
                </ul>
            </div>
        </Layout>
    )
}

export default Resume
