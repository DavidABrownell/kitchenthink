import React from 'react'
import Silos from '../util/silos'
import SyndicationLink from './syndicationLink'
import PropTypes from 'prop-types'

const SyndicationLinks = ({ syndicationUrls, originalPermalink }) => {
    return (
        <div
            style={{
                minHeight: '1.25rem',
                marginBottom: '1rem',
                display: 'flex',
                gap: '1rem',
            }}
        >
            {Silos.map((silo, index) => {
                return (
                    <SyndicationLink
                        key={index}
                        syndicationUrl={syndicationUrls[silo]}
                        siloName={silo.name}
                        bridgyUserUrl={silo.bridgyUserUrl}
                        bridgySiloMicroformatTag={silo.bridgyMicroformatTag}
                        originalPermalink={originalPermalink}
                    />
                )
            })}
        </div>
    )
}

SyndicationLinks.propTypes = {
    syndicationUrls: PropTypes.object.isRequired,
    originalPermalink: PropTypes.string.isRequired,
}

export default SyndicationLinks
