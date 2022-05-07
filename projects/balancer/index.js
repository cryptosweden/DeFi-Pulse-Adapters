/* ==================================================
  Modules
  ================================================== */

const sdk = require('../../sdk')
const _ = require('underscore')
const BigNumber = require('bignumber.js')
const { request, gql } = require('graphql-request')

const abi = require('./abi')

const V2_ADDRESS = '0xBA12222222228d8Ba445958a75a0704d566BF2C8'
const tokensApi =
  'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2'

/* ==================================================
  TVL
  ================================================== */

async function tvl (timestamp, block) {
  const balances = {
    '0x0000000000000000000000000000000000000000': '0' // ETH
  }

  const poolLogs = await sdk.api.util.getLogs({
    target: '0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd',
    topic: 'LOG_NEW_POOL(address,address)',
    keys: ['topics'],
    fromBlock: 9562480,
    toBlock: block
  })

  const poolCalls = []

  const pools = _.map(poolLogs.output, (poolLog) => {
    if (poolLog.topics) {
      return `0x${poolLog.topics[2].slice(26)}`
    } else {
      return `0x${poolLog[2].slice(26)}`
    }
  })

  const poolTokenData = (
    await sdk.api.abi.multiCall({
      calls: _.map(pools, (poolAddress) => ({ target: poolAddress })),
      abi: abi.getCurrentTokens
    })
  ).output

  _.forEach(poolTokenData, (poolToken) => {
    const poolTokens = poolToken.output
    const poolAddress = poolToken.input.target

    _.forEach(poolTokens, (token) => {
      poolCalls.push({
        target: token,
        params: poolAddress
      })
    })
  })

  const poolBalances = (
    await sdk.api.abi.multiCall({
      block,
      calls: poolCalls,
      abi: 'erc20:balanceOf'
    })
  ).output

  _.each(poolBalances, (balanceOf) => {
    if (balanceOf.success) {
      const balance = balanceOf.output
      const address = balanceOf.input.target

      if (BigNumber(balance).toNumber() <= 0) {
        return
      }

      balances[address] = BigNumber(balances[address] || 0)
        .plus(balance)
        .toFixed()
    }
  })

  try {
    const POOL_TOKENS = gql`
      {
        balancers {
          pools {
            tokens {
              address
            }
          }
        }
      }
    `

    const v2Tokens = await request(tokensApi, POOL_TOKENS, {
      block
    })
    let tokenAddresses = []
    for (let i = 0; i < v2Tokens.balancers[0].pools.length; i++) {
      for (const address of v2Tokens.balancers[0].pools[i].tokens) {
        tokenAddresses.push(address.address)
      }
    }
    tokenAddresses = _.uniq(tokenAddresses)

    const v2Calls = tokenAddresses.map((address) => {
      return {
        target: address,
        params: V2_ADDRESS
      }
    })
    const v2Balances = (
      await sdk.api.abi.multiCall({
        block,
        calls: v2Calls,
        abi: 'erc20:balanceOf'
      })
    ).output
    _.each(v2Balances, (balanceOf) => {
      if (balanceOf.success) {
        const balance = balanceOf.output
        const address = balanceOf.input.target

        if (BigNumber(balance).toNumber() <= 0) {
          return
        }

        balances[address] = BigNumber(balances[address] || 0)
          .plus(balance)
          .toFixed()
      }
    })
  } catch (e) {
    console.log(e)
    throw e
  }

  return balances
}

/* ==================================================
  Exports
  ================================================== */

module.exports = {
  name: 'Balancer',
  token: 'BAL',
  category: 'dexes',
  start: 1582761600, // 02/27/2020 @ 12:00am (UTC)
  tvl
}
