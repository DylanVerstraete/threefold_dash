/* eslint-disable */
const types = require('./types.json')

// const { ApiPromise, WsProvider } = require('@polkadot/api')
import { ApiPromise, WsProvider } from '@polkadot/api'
export async function getClient (network) {
  let url = 'wss://tfchain.dev.grid.tf'
  switch (network) {
    case 'test': 
      url = 'wss://tfchain.test.grid.tf'
      break
    case 'main': 
      url = 'wss://tfchain.grid.tf'
      break
    default: 
      break
  }
  const provider = new WsProvider(url)
  return ApiPromise.create({ provider, types })
}