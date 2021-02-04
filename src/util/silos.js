/** Info about silos to which the site syndicates */
class Silo {
    constructor({
        name,
        bridgyUserUrl,
        bridgyPublishUrl,
        bridgyMicroformatTag,
    }) {
        this.name = name
        this.bridgyUserUrl = bridgyUserUrl
        this.bridgyPublishUrl = bridgyPublishUrl
        this.bridgyMicroformatTag = bridgyMicroformatTag
    }
}

const Twitter = new Silo({
    name: 'Twitter',
    bridgyUserUrl: 'https://brid.gy/twitter/InkBrownell',
    bridgyPublishUrl: 'https://brid.gy/publish/twitter',
    bridgyMicroformatTag: 'h-bridgy-tweet',
})

const Silos = [Twitter]

module.exports = Silos
