import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Projects = () => {
    const query = useStaticQuery(graphql`
        query {
            file(
                relativePath: {
                    eq: "graph-theorists-sketchpad-dodecahedron.png"
                }
            ) {
                childImageSharp {
                    fixed(width: 400) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title="Projects" />
            <h1>Projects</h1>
            <h2>
                <a
                    href="https://github.com/InkBrownell/multiple-custody"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Multiple Custody Key Sharing
                </a>
            </h2>
            <p>
                This project extends Shamir&apos;s Secret Sharing Scheme with a
                friendlier interface. It allows the user to create complex
                schemas which the software will resolve to some key sharing
                scheme.
            </p>

            <h2>
                <a
                    href="https://github.com/InkBrownell/graph-theorists-sketchpad"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Graph Theorist&apos;s Sketchpad
                </a>
            </h2>

            <Img
                fixed={query.file?.childImageSharp.fixed}
                alt="The net of a dodecahedron displayed using the sketchpad."
            />

            <h3>
                <a
                    href="https://inkbrownell.github.io/graph-theorists-sketchpad/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Try it here!
                </a>
            </h3>
            <p>
                A sketchpad to assist with elementary graph theory. It allows
                the user to add nodes and vertices, move them around, delete
                them, and color them. It also keeps a count of the nodes,
                vertices, and components. Developed in React.
            </p>
            <h2>
                <a
                    href="https://github.com/InkBrownell/Rendering-Engine"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    Haskell Rendering Engine
                </a>
            </h2>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IvmV4FJ7Al8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <p>
                I wrote this toy wireframe rendering engine as a Linear Algebra
                math class project to demonstrate a use of matrices. It&apos;s
                been a few years since I last worked on it. This was one of my
                very earliest programming projects, and looking at it reminds me
                of how far I&apos;ve come as a developer.
            </p>
        </Layout>
    )
}

export default Projects
