/* ==================================================
  Modules
  ================================================== */

const sdk = require('../../sdk')
const _ = require('underscore')
const BigNumber = require('bignumber.js')

/* ==================================================
  Settings
  ================================================== */

const versions = [
  '0xCB6c6Bdf0AA4cF0188518783b871931EFB64248f',
  '0x01Bde0b02740D6311e4a87CA112DeEEddb057EFB',
  '0x5f9AE054C7F0489888B1ea46824b4B9618f8A711'
]

/* ==================================================
  TVL
  ================================================== */

async function tvl (timestamp, block) {
  const balances = {}

  const latestIds = (
    await sdk.api.abi.multiCall({
      block,
      calls: _.map(versions, (version) => {
        return {
          target: version
        }
      }),
      abi: {
        constant: true,
        inputs: [],
        name: 'getLastFundId',
        outputs: [
          {
            name: '',
            type: 'uint256'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      }
    })
  ).output

  const fundCalls = []

  _.each(latestIds, (latestId) => {
    // edge case error where getLastFundId reports incorrectly with a very high number
    // possible overflow bug or different output type by design to signal error
    // check for reasonable number string length to mitigate
    if (latestId.success && latestId.output.length < 10) {
      const ids = _.range(Number(latestId.output) + 1)

      _.each(ids, (id) => {
        fundCalls.push({
          target: latestId.input.target,
          params: id
        })
      })
    }
  })

  const funds = (
    await sdk.api.abi.multiCall({
      block,
      calls: fundCalls,
      abi: {
        constant: true,
        inputs: [
          {
            name: 'withId',
            type: 'uint256'
          }
        ],
        name: 'getFundById',
        outputs: [
          {
            name: '',
            type: 'address'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      }
    })
  ).output

  const accountingCalls = _.map(
    _.uniq(
      _.pluck(
        _.filter(funds, (fund) => {
          return fund.success
        }),
        'output'
      )
    ),
    (fund) => {
      return {
        target: fund
      }
    }
  )

  const accounting = (
    await sdk.api.abi.multiCall({
      block,
      calls: accountingCalls,
      abi: {
        constant: true,
        inputs: [],
        name: 'accounting',
        outputs: [
          {
            name: '',
            type: 'address'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      }
    })
  ).output

  const holdingCalls = []

  _.each(accounting, (account) => {
    if (account.success) {
      holdingCalls.push({
        target: account.output
      })
    }
  })

  const fundHoldings = (
    await sdk.api.abi.multiCall({
      block,
      calls: holdingCalls,
      abi: {
        constant: false,
        inputs: [],
        name: 'getFundHoldings',
        outputs: [
          {
            name: '',
            type: 'uint256[]'
          },
          {
            name: '',
            type: 'address[]'
          }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    })
  ).output

  _.each(fundHoldings, (holdings) => {
    if (holdings.success) {
      const output = _.zip(holdings.output[1], holdings.output[0])

      _.each(output, (balance) => {
        const address = balance[0]
        const value = balance[1]
        balances[address] = BigNumber(balances[address] || 0)
          .plus(value)
          .toFixed()
      })
    }
  })

  return balances
}

/* ==================================================
  Exports
  ================================================== */

module.exports = {
  name: 'Melon',
  token: 'MLN',
  category: 'Assets',
  start: 1551398400, // 03/01/2019 @ 12:00am (UTC)
  tvl
}
