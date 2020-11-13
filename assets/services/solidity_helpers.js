import Web3 from 'web3'
import Farm from '../contracts/Farm.json'
import BigNumber from 'bignumber.js'
import { EM_ADDRESS } from '../keys'

export async function getContract(Contract, address) {
    const Web3_ETH = new Web3(window.ethereum)
    if(address) {
        return await new Web3_ETH.eth.Contract(Contract, address)
    } else return undefined
}

export async function getFarmAddress() {
    return EM_ADDRESS
}

export async function weiConverter(wei) {
    return Web3.utils.fromWei(wei, 'ether')
}

export async function toWei(number) {
    return Web3.utils.toWei(number, 'ether')
}



export const getBalanceNumber = (balance, decimals = 18) => {
  const displayBalance = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}