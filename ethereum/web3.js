import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and MetaMask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running MetaMask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/oF9IVMjLtlJ4EaGh1omg'
    );

    web3 = new Web3(provider);
}

export default web3;