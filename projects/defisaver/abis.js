module.exports = {
  MCDSaverProxy: {
    abi: [
      {
        constant: true,
        inputs: [],
        name: 'WETH_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'CDAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SAVINGS_LOGGER_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'ETH_ILK',
        outputs: [{ name: '', type: 'bytes32' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PIP_INTERFACE_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'KYBER_ETH_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'OTC_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'DAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'IDAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'spotter',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: '_manager', type: 'address' },
          { name: '_cdpId', type: 'uint256' }
        ],
        name: 'getOwner',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'GAS_TOKEN_INTERFACE_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'vat',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'VOX_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MANAGER_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: '_manager', type: 'address' },
          { name: '_cdpId', type: 'uint256' },
          { name: '_ilk', type: 'bytes32' }
        ],
        name: 'getCdpInfo',
        outputs: [
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MONITOR_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'ETH2DAI_WRAPPER',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'manager',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'STUPID_EXCHANGE',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SERVICE_FEE',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SPOTTER_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PROXY_REGISTRY_INTERFACE_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MKR_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'FACTORY_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'LOGGER_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SAVER_EXCHANGE_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MAKER_DAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'DISCOUNT_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'JUG_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'KYBER_WRAPPER',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SUBSCRIPTION_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'daiJoin',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'COMPOUND_DAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SAI_SAVER_PROXY',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'UNISWAP_FACTORY',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'OASIS_WRAPPER',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PETH_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'KYBER_INTERFACE',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'VAT_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'DAI_JOIN_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'WALLET_ID',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SOLO_MARGIN_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'UNISWAP_WRAPPER',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'TUB_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'ETH_JOIN_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SCD_MCD_MIGRATION',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: '_cdpId', type: 'uint256' },
          { name: '_joinAddr', type: 'address' },
          { name: '_amount', type: 'uint256' },
          { name: '_minPrice', type: 'uint256' },
          { name: '_exchangeType', type: 'uint256' },
          { name: '_gasCost', type: 'uint256' }
        ],
        name: 'repay',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: '_cdpId', type: 'uint256' },
          { name: '_joinAddr', type: 'address' },
          { name: '_daiAmount', type: 'uint256' },
          { name: '_minPrice', type: 'uint256' },
          { name: '_exchangeType', type: 'uint256' },
          { name: '_gasCost', type: 'uint256' }
        ],
        name: 'boost',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: '_cdpId', type: 'uint256' },
          { name: '_ilk', type: 'bytes32' }
        ],
        name: 'getMaxCollateral',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: '_cdpId', type: 'uint256' },
          { name: '_ilk', type: 'bytes32' }
        ],
        name: 'getMaxDebt',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_ilk', type: 'bytes32' }],
        name: 'getPrice',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: '_cdpId', type: 'uint256' },
          { name: '_ilk', type: 'bytes32' }
        ],
        name: 'getRatio',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_cdpId', type: 'uint256' }],
        name: 'getCdpDetailedInfo',
        outputs: [
          { name: 'collateral', type: 'uint256' },
          { name: 'debt', type: 'uint256' },
          { name: 'price', type: 'uint256' },
          { name: 'ilk', type: 'bytes32' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      }
    ],
    networks: {
      42: {
        createdBlock: 14500373,
        address: '0xDbfdfDBcA9f796Bf955B8B4EB2b46dBb51CaE30B'
      },
      1: {
        createdBlock: 8928152,
        address: '0x260C1543743FD03cD98a1d1eDC3A4724af0A1Fce'
      }
    }
  },
  McdSubscriptions: {
    abi: [
      {
        constant: true,
        inputs: [],
        name: 'WETH_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'CDAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getSubscribers',
        outputs: [
          {
            components: [
              { name: 'minRatio', type: 'uint128' },
              { name: 'maxRatio', type: 'uint128' },
              { name: 'optimalRatioBoost', type: 'uint128' },
              { name: 'optimalRatioRepay', type: 'uint128' },
              { name: 'owner', type: 'address' },
              { name: 'cdpId', type: 'uint256' },
              { name: 'boostEnabled', type: 'bool' },
              { name: 'nextPriceEnabled', type: 'bool' }
            ],
            name: '',
            type: 'tuple[]'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SAVINGS_LOGGER_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'changeIndex',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_cdpId', type: 'uint256' }],
        name: 'getCdpHolder',
        outputs: [
          { name: 'subscribed', type: 'bool' },
          {
            components: [
              { name: 'minRatio', type: 'uint128' },
              { name: 'maxRatio', type: 'uint128' },
              { name: 'optimalRatioBoost', type: 'uint128' },
              { name: 'optimalRatioRepay', type: 'uint128' },
              { name: 'owner', type: 'address' },
              { name: 'cdpId', type: 'uint256' },
              { name: 'boostEnabled', type: 'bool' },
              { name: 'nextPriceEnabled', type: 'bool' }
            ],
            name: '',
            type: 'tuple'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PIP_INTERFACE_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'setOwnerByAdmin',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'KYBER_ETH_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'OTC_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'DAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'IDAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: '_ilk', type: 'bytes32' },
          { name: '_cdpId', type: 'uint256' }
        ],
        name: 'getIlkInfo',
        outputs: [
          { name: 'ilk', type: 'bytes32' },
          { name: 'art', type: 'uint256' },
          { name: 'rate', type: 'uint256' },
          { name: 'spot', type: 'uint256' },
          { name: 'line', type: 'uint256' },
          { name: 'dust', type: 'uint256' },
          { name: 'mat', type: 'uint256' },
          { name: 'par', type: 'uint256' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'spotter',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'GAS_TOKEN_INTERFACE_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'vat',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'VOX_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MANAGER_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MONITOR_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'ETH2DAI_WRAPPER',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'manager',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'STUPID_EXCHANGE',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '', type: 'uint256' }],
        name: 'subscribers',
        outputs: [
          { name: 'minRatio', type: 'uint128' },
          { name: 'maxRatio', type: 'uint128' },
          { name: 'optimalRatioBoost', type: 'uint128' },
          { name: 'optimalRatioRepay', type: 'uint128' },
          { name: 'owner', type: 'address' },
          { name: 'cdpId', type: 'uint256' },
          { name: 'boostEnabled', type: 'bool' },
          { name: 'nextPriceEnabled', type: 'bool' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: '_cdpId', type: 'uint256' },
          { name: '_minRatio', type: 'uint128' },
          { name: '_maxRatio', type: 'uint128' },
          { name: '_optimalBoost', type: 'uint128' },
          { name: '_optimalRepay', type: 'uint128' },
          { name: '_boostEnabled', type: 'bool' },
          { name: '_nextPriceEnabled', type: 'bool' }
        ],
        name: 'subscribe',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MIGRATION_ACTIONS_PROXY',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '', type: 'bytes32' }],
        name: 'minLimits',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SPOTTER_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '', type: 'uint256' }],
        name: 'subscribersPos',
        outputs: [
          { name: 'arrPos', type: 'uint256' },
          { name: 'subscribed', type: 'bool' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PROXY_REGISTRY_INTERFACE_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PROXY_ACTIONS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MKR_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'FACTORY_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: '_page', type: 'uint256' },
          { name: '_perPage', type: 'uint256' }
        ],
        name: 'getSubscribersByPage',
        outputs: [
          {
            components: [
              { name: 'minRatio', type: 'uint128' },
              { name: 'maxRatio', type: 'uint128' },
              { name: 'optimalRatioBoost', type: 'uint128' },
              { name: 'optimalRatioRepay', type: 'uint128' },
              { name: 'owner', type: 'address' },
              { name: 'cdpId', type: 'uint256' },
              { name: 'boostEnabled', type: 'bool' },
              { name: 'nextPriceEnabled', type: 'bool' }
            ],
            name: '',
            type: 'tuple[]'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_cdpId', type: 'uint256' }],
        name: 'unsubscribeByAdmin',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'LOGGER_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SAVER_EXCHANGE_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'MAKER_DAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'DISCOUNT_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_admin', type: 'address' }],
        name: 'setAdminByAdmin',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'JUG_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_cdpId', type: 'uint256' }],
        name: 'unsubscribe',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'NEW_CDAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'KYBER_WRAPPER',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SUBSCRIPTION_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'NEW_IDAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'COMPOUND_DAI_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_cdpId', type: 'uint256' }],
        name: 'getOwner',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'UNISWAP_FACTORY',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'OASIS_WRAPPER',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'PETH_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_cdpId', type: 'uint256' }],
        name: 'getSubscribedInfo',
        outputs: [
          { name: '', type: 'bool' },
          { name: '', type: 'uint128' },
          { name: '', type: 'uint128' },
          { name: '', type: 'uint128' },
          { name: '', type: 'uint128' },
          { name: '', type: 'address' },
          { name: 'coll', type: 'uint256' },
          { name: 'debt', type: 'uint256' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'KYBER_INTERFACE',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'VAT_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'DAI_JOIN_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'ERC20_PROXY_0X',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'WALLET_ID',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SOLO_MARGIN_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'UNISWAP_WRAPPER',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_admin', type: 'address' }],
        name: 'setAdminByOwner',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'saverProxy',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: '_ilk', type: 'bytes32' },
          { name: '_newRatio', type: 'uint256' }
        ],
        name: 'changeMinRatios',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'TUB_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'ETH_JOIN_ADDRESS',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'SCD_MCD_MIGRATION',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'admin',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ name: '_saverProxy', type: 'address' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'owner', type: 'address' },
          { indexed: false, name: 'cdpId', type: 'uint256' }
        ],
        name: 'Subscribed',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'owner', type: 'address' },
          { indexed: false, name: 'cdpId', type: 'uint256' }
        ],
        name: 'Unsubscribed',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'owner', type: 'address' },
          { indexed: false, name: 'cdpId', type: 'uint256' }
        ],
        name: 'Updated',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'owner', type: 'address' },
          { indexed: false, name: 'cdpId', type: 'uint256' },
          { indexed: false, name: '', type: 'uint128' },
          { indexed: false, name: '', type: 'uint128' },
          { indexed: false, name: '', type: 'uint128' },
          { indexed: false, name: '', type: 'uint128' },
          { indexed: false, name: 'boostEnabled', type: 'bool' }
        ],
        name: 'ParamUpdates',
        type: 'event'
      }
    ],
    networks: {
      1: {
        createdBlock: 9831168,
        address: '0xC45d4f6B6bf41b6EdAA58B01c4298B8d9078269a'
      }
    }
  },
  CompoundSubscriptions: {
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: '',
            type: 'uint128'
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: '',
            type: 'uint128'
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: '',
            type: 'uint128'
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: '',
            type: 'uint128'
          },
          { indexed: false, internalType: 'bool', name: '', type: 'bool' }
        ],
        name: 'ParamUpdates',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          }
        ],
        name: 'Subscribed',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          }
        ],
        name: 'Unsubscribed',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          }
        ],
        name: 'Updated',
        type: 'event'
      },
      {
        constant: true,
        inputs: [],
        name: 'admin',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'changeIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
        name: 'getHolder',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'user', type: 'address' },
              { internalType: 'uint128', name: 'minRatio', type: 'uint128' },
              { internalType: 'uint128', name: 'maxRatio', type: 'uint128' },
              {
                internalType: 'uint128',
                name: 'optimalRatioBoost',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'optimalRatioRepay',
                type: 'uint128'
              },
              { internalType: 'bool', name: 'boostEnabled', type: 'bool' }
            ],
            internalType: 'struct CompoundSubscriptions.CompoundHolder',
            name: '',
            type: 'tuple'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getSubscribers',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'user', type: 'address' },
              { internalType: 'uint128', name: 'minRatio', type: 'uint128' },
              { internalType: 'uint128', name: 'maxRatio', type: 'uint128' },
              {
                internalType: 'uint128',
                name: 'optimalRatioBoost',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'optimalRatioRepay',
                type: 'uint128'
              },
              { internalType: 'bool', name: 'boostEnabled', type: 'bool' }
            ],
            internalType: 'struct CompoundSubscriptions.CompoundHolder[]',
            name: '',
            type: 'tuple[]'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { internalType: 'uint256', name: '_page', type: 'uint256' },
          { internalType: 'uint256', name: '_perPage', type: 'uint256' }
        ],
        name: 'getSubscribersByPage',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'user', type: 'address' },
              { internalType: 'uint128', name: 'minRatio', type: 'uint128' },
              { internalType: 'uint128', name: 'maxRatio', type: 'uint128' },
              {
                internalType: 'uint128',
                name: 'optimalRatioBoost',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'optimalRatioRepay',
                type: 'uint128'
              },
              { internalType: 'bool', name: 'boostEnabled', type: 'bool' }
            ],
            internalType: 'struct CompoundSubscriptions.CompoundHolder[]',
            name: '',
            type: 'tuple[]'
          }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
        name: 'isSubscribed',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ internalType: 'address', name: '_admin', type: 'address' }],
        name: 'setAdminByAdmin',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ internalType: 'address', name: '_admin', type: 'address' }],
        name: 'setAdminByOwner',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
        name: 'setOwnerByAdmin',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { internalType: 'uint128', name: '_minRatio', type: 'uint128' },
          { internalType: 'uint128', name: '_maxRatio', type: 'uint128' },
          { internalType: 'uint128', name: '_optimalBoost', type: 'uint128' },
          { internalType: 'uint128', name: '_optimalRepay', type: 'uint128' },
          { internalType: 'bool', name: '_boostEnabled', type: 'bool' }
        ],
        name: 'subscribe',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'subscribers',
        outputs: [
          { internalType: 'address', name: 'user', type: 'address' },
          { internalType: 'uint128', name: 'minRatio', type: 'uint128' },
          { internalType: 'uint128', name: 'maxRatio', type: 'uint128' },
          {
            internalType: 'uint128',
            name: 'optimalRatioBoost',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'optimalRatioRepay',
            type: 'uint128'
          },
          { internalType: 'bool', name: 'boostEnabled', type: 'bool' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'subscribersPos',
        outputs: [
          { internalType: 'uint256', name: 'arrPos', type: 'uint256' },
          { internalType: 'bool', name: 'subscribed', type: 'bool' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [],
        name: 'unsubscribe',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
        name: 'unsubscribeByAdmin',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ],
    networks: {
      1: {
        createdBlock: 10386357,
        address: '0x52015effd577e08f498a0ccc11905925d58d6207'
      }
    }
  },
  AaveSubscriptions: {
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: '',
            type: 'uint128'
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: '',
            type: 'uint128'
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: '',
            type: 'uint128'
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: '',
            type: 'uint128'
          },
          { indexed: false, internalType: 'bool', name: '', type: 'bool' }
        ],
        name: 'ParamUpdates',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          }
        ],
        name: 'Subscribed',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          }
        ],
        name: 'Unsubscribed',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address'
          }
        ],
        name: 'Updated',
        type: 'event'
      },
      {
        inputs: [],
        name: 'admin',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'changeIndex',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
        name: 'getHolder',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'user', type: 'address' },
              { internalType: 'uint128', name: 'minRatio', type: 'uint128' },
              { internalType: 'uint128', name: 'maxRatio', type: 'uint128' },
              {
                internalType: 'uint128',
                name: 'optimalRatioBoost',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'optimalRatioRepay',
                type: 'uint128'
              },
              { internalType: 'bool', name: 'boostEnabled', type: 'bool' }
            ],
            internalType: 'struct CompoundSubscriptions.CompoundHolder',
            name: '',
            type: 'tuple'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getSubscribers',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'user', type: 'address' },
              { internalType: 'uint128', name: 'minRatio', type: 'uint128' },
              { internalType: 'uint128', name: 'maxRatio', type: 'uint128' },
              {
                internalType: 'uint128',
                name: 'optimalRatioBoost',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'optimalRatioRepay',
                type: 'uint128'
              },
              { internalType: 'bool', name: 'boostEnabled', type: 'bool' }
            ],
            internalType: 'struct CompoundSubscriptions.CompoundHolder[]',
            name: '',
            type: 'tuple[]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          { internalType: 'uint256', name: '_page', type: 'uint256' },
          { internalType: 'uint256', name: '_perPage', type: 'uint256' }
        ],
        name: 'getSubscribersByPage',
        outputs: [
          {
            components: [
              { internalType: 'address', name: 'user', type: 'address' },
              { internalType: 'uint128', name: 'minRatio', type: 'uint128' },
              { internalType: 'uint128', name: 'maxRatio', type: 'uint128' },
              {
                internalType: 'uint128',
                name: 'optimalRatioBoost',
                type: 'uint128'
              },
              {
                internalType: 'uint128',
                name: 'optimalRatioRepay',
                type: 'uint128'
              },
              { internalType: 'bool', name: 'boostEnabled', type: 'bool' }
            ],
            internalType: 'struct CompoundSubscriptions.CompoundHolder[]',
            name: '',
            type: 'tuple[]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
        name: 'isSubscribed',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'kill',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'address', name: '_admin', type: 'address' }],
        name: 'setAdminByAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'address', name: '_admin', type: 'address' }],
        name: 'setAdminByOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
        name: 'setOwnerByAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          { internalType: 'uint128', name: '_minRatio', type: 'uint128' },
          { internalType: 'uint128', name: '_maxRatio', type: 'uint128' },
          { internalType: 'uint128', name: '_optimalBoost', type: 'uint128' },
          { internalType: 'uint128', name: '_optimalRepay', type: 'uint128' },
          { internalType: 'bool', name: '_boostEnabled', type: 'bool' }
        ],
        name: 'subscribe',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'subscribers',
        outputs: [
          { internalType: 'address', name: 'user', type: 'address' },
          { internalType: 'uint128', name: 'minRatio', type: 'uint128' },
          { internalType: 'uint128', name: 'maxRatio', type: 'uint128' },
          {
            internalType: 'uint128',
            name: 'optimalRatioBoost',
            type: 'uint128'
          },
          {
            internalType: 'uint128',
            name: 'optimalRatioRepay',
            type: 'uint128'
          },
          { internalType: 'bool', name: 'boostEnabled', type: 'bool' }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'subscribersPos',
        outputs: [
          { internalType: 'uint256', name: 'arrPos', type: 'uint256' },
          { internalType: 'bool', name: 'subscribed', type: 'bool' }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'unsubscribe',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
        name: 'unsubscribeByAdmin',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          { internalType: 'address', name: '_token', type: 'address' },
          { internalType: 'uint256', name: '_amount', type: 'uint256' }
        ],
        name: 'withdrawStuckFunds',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ],
    networks: {
      1: {
        createdBlock: 10748506,
        address: '0xe08ff7a2badb634f0b581e675e6b3e583de086fc'
      }
    }
  }
}
