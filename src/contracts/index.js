import { ethers } from "ethers";

import Contrats from "./contracts/4002.json";

const supportChainId = 4002;

const RPCS = {
    1: "http://13.59.118.124/eth",
    250: "https://rpc.ftm.tools/",
    4002: "https://rpc.testnet.fantom.network",
    1337: "http://localhost:7545",
    31337: "http://localhost:8545/"
}

const providers = {
    1: new ethers.providers.JsonRpcProvider(RPCS[1]),
    250: new ethers.providers.JsonRpcProvider(RPCS[250]),
    4002: new ethers.providers.JsonRpcProvider(RPCS[4002]),
    // 1337: new ethers.providers.JsonRpcProvider(RPCS[1337]),
    // 31337: new ethers.providers.JsonRpcProvider(RPCS[31337])
}

const tokenContract = new ethers.Contract(Contrats.rundogToken.address, Contrats.rundogToken.abi, providers[supportChainId]);
const presaleContract = new ethers.Contract(Contrats.presale.address, Contrats.presale.abi, providers[supportChainId]);
const storeContract = new ethers.Contract(Contrats.store.address, Contrats.store.abi, providers[supportChainId]);

export {
    providers, tokenContract, presaleContract, storeContract
}