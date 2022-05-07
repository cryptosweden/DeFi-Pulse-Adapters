'use strict'

class Scraper1ML {
  // @return URL for the site that we'll scrape
  URL () {
    return 'https://1ml.com/statistics'
  }

  // @return scraped BTC amount as string
  scrape (parsedHTML) {
    // find all the expand detail icons
    const expandDetailNodes = parsedHTML.querySelectorAll('.expandDetailsIcon')

    // iterate through until we find the one linked to network capacity
    for (let i = 0; i < expandDetailNodes.length; i++) {
      const node = expandDetailNodes[i]

      if (node.rawAttrs.toLowerCase().includes('networkcapacity')) {
        // go into parent and check child node 1, child node 0 for the label that displays capacity
        const capacity =
          node.parentNode.childNodes[1].childNodes[0].text.trim()

        // strip out trailing BTC
        const delimiter = ' BTC'
        const delimeterIndex = capacity.indexOf(delimiter)
        const amount = capacity.substring(0, delimeterIndex)

        return amount
      }
    }
  }
}

module.exports = Scraper1ML
