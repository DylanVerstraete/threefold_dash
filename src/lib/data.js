/* eslint-disable */

import axios from "axios"
import { getClient } from "./client"

async function getTwins (api) {
    return await api.query.tfgridModule.twinID()
  }

async function getFarms(api) {
    return await api.query.tfgridModule.farmID()
}

async function getNodes(api) {
    return await api.query.tfgridModule.nodeID()
}

async function getPrice() {
    const res = await axios.get('https://tftprice.grid.tf')
    return res.data.USD
}

export async function getData() {
    const dev = await getClient('dev')
    const test = await getClient('dev')
    const main = await getClient('main')

    const [twins, farms, nodes] = await Promise.all([getTwins(dev), getFarms(dev), getNodes(dev)])
    const [twins1, farms1, nodes1] = await Promise.all([getTwins(test), getFarms(test), getNodes(test)])
    const [twins2, farms2, nodes2] = await Promise.all([getTwins(main), getFarms(main), getNodes(main)])

    let price = 0
    try {
        price = await getPrice()
    } catch (error) {
        price = 0
    }

    return {
        totalTwins: twins.toNumber() + twins1.toNumber() + twins2.toNumber(),
        totalFarms: farms.toNumber() + farms1.toNumber() + farms2.toNumber(),
        totalNodes: nodes.toNumber() + nodes1.toNumber() + nodes2.toNumber(),
        price
    }
}