const BigNumber = require('bignumber.js')
const HTMLParser = require('node-html-parser')
const fetch = require('node-fetch')
const axios = require('axios')
const moment = require('moment')
const papa = require('papaparse')
const _ = require('underscore')

// Scrapers
const Scraper1ML = require('./utils/Scraper1ML.js')
const ScraperLightBlock = require('./utils/ScraperLightBlock.js')

// is there a better way to just return btc? since it is not on ethereum it is not really wbtc.
const WBTC_ADDRESS = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'

let historyTimestamp = 0

function GetDailyHistory () {
  return new Promise(async (resolve, reject) => {
    try {
      const timestamp = moment().startOf('day').unix()

      if (timestamp == historyTimestamp) {
        resolve()
        return
      }

      dayHistory = {}

      const response = await axios.get(
        'https://bitcoinvisuals.com/static/data/data_daily.csv'
      )

      let data = papa.parse(response.data, {
        header: true,
        skipEmptyLines: true
      })

      data = _.each(data.data, (row) => {
        const timestamp = moment(row.day, '')
          .utcOffset(0)
          .startOf('day')
          .add(1, 'day')
          .unix()

        dayHistory[timestamp] = row.capacity_total
      })

      historyTimestamp = timestamp

      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

async function tvl (timestamp, block) {
  await GetDailyHistory()

  let channelCapacity = null

  if (
    dayHistory[timestamp] &&
    moment().utcOffset(0).startOf('hour').unix() != timestamp
  ) {
    channelCapacity = new BigNumber(dayHistory[timestamp])
  } else {
    // else try scraping from one of our sources
    const scrapers = [new Scraper1ML(), new ScraperLightBlock()]

    for (let i = 0; i < scrapers.length; i++) {
      const scraper = scrapers[i]

      const scrapeTarget = scraper.URL()

      let amount = null

      try {
        // load page html
        const html = await fetch(scrapeTarget).then(function (response) {
          return response.text()
        })

        // parse the html
        const parsedHTML = HTMLParser.parse(html)

        amount = scraper.scrape(parsedHTML)

        amount = amount.replace(',', '')

        // check that the amount we parsed is a valid number, if not then continue to next scraper
        if (isNaN(Number(amount))) {
          continue
        }
      } catch (error) {
        console.log(error)
      }

      // break if we successfully scraped a channel capacity
      if (amount != null) {
        channelCapacity = new BigNumber(amount)
        break
      }
    }
  }

  // if none of our scrape targets worked then throw an error
  if (channelCapacity == null) {
    throw 'Unable to determine LN channel capacity.'
  }

  return {
    [WBTC_ADDRESS]: channelCapacity.times(Math.pow(10, 8)).toFixed()
  }
}

module.exports = {
  name: 'Lightning Network',
  token: null,
  category: 'payments',
  start: 1516406400,
  tvl
}
