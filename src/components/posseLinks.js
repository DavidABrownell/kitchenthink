import React from 'react'
import Silos from '../util/silos'

const PosseLinks = () => {
    return (
        <>
            {Silos.map((silo, index) => (
                <a
                    href={silo.bridgyPublishUrl}
                    key={index}
                    aria-hidden={true}
                />
            ))}
        </>
    )
}

export default PosseLinks
