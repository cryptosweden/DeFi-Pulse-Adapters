'use strict'

class ScraperLightBlock {
  // @return URL for the site that we'll scrape
  URL () {
    return 'https://lightblock.me/lightning-network-stats'
  }

  // @return scraped BTC amount as string
  scrape (parsedHTML) {
    // find the tab for network capacity
    const networkCapacityTabNode = parsedHTML.querySelector(
      '#total-live-network-capacity'
    )
    // grab the tab's child index 1 text and trim it
    const capacity = networkCapacityTabNode.childNodes[1].text.trim()
    // strip out trailing BTC
    const delimiter = ' BTC'
    const delimeterIndex = capacity.indexOf(delimiter)
    const amount = capacity.substring(0, delimeterIndex)

    return amount
  }
}

module.exports = ScraperLightBlock
