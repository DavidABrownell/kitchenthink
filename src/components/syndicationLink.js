import React, { useEffect, useState } from 'react'
import * as PropTypes from 'prop-types'
import { getAsync } from 'microformat-node'

/**
 * SyndicationLink is a link from the original post to its syndicated duplicates.
 * This component can be compile-time rendered if it's provided the prop
 * `syndicationUrl`, otherwise it retrieves the link at runtime.
 */
const SyndicationLink = ({
    syndicationUrl,
    bridgyUserUrl,
    bridgySiloMicroformatTag,
    siloName,
    originalPermalink,
}) => {
    let link
    if (syndicationUrl) {
        link = syndicationUrl
    } else {
        const [syndicationUrlState, setSyndicationUrlState] = useState(
            undefined
        )

        useEffect(() => {
            // The argument to useEffect can't be async itself, so we use
            // a self-calling async function in the body instead
            ;(async () => {
                const result = await fetch(bridgyUserUrl)
                const html = await result.text()
                const microformats = await getAsync({
                    html: html,
                })
                const syndicationUrl = microformats.items[0].children.filter(
                    item =>
                        item.type.includes('h-bridgy-publish') &&
                        item.type.includes(bridgySiloMicroformatTag) &&
                        item.properties.url[0] === originalPermalink
                )?.[0].properties.syndication[0]

                setSyndicationUrlState(syndicationUrl)
            })()
        })

        link = syndicationUrlState
    }

    return link ? (
        <a
            href={link}
            className="u-syndication"
            style={{ display: 'inline-block' }}
        >
            See on {siloName}
        </a>
    ) : null
}

SyndicationLink.propTypes = {
    /** The URL which the link is intended to point to. Typically a post, e.g. a link to a tweet. */
    syndicationUrl: PropTypes.string,
    /** The brid.gy user page for this silo, e.g. https://brid.gy/twitter/InkBrownell */
    bridgyUserUrl: PropTypes.string.isRequired,
    /** The brid.gy microformat tag for this type of post, e.g. `h-bridgy-tweet` */
    bridgySiloMicroformatTag: PropTypes.string.isRequired,
    /** The human-readable name of the silo, e.g. Twitter */
    siloName: PropTypes.string.isRequired,
    /** The permalink to the original post */
    originalPermalink: PropTypes.string.isRequired,
}

export default SyndicationLink
