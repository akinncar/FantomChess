
import React, {useState, useEffect} from 'react';
let Web3 = require('web3');

function Index() {
  const [web3, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)

  useEffect(() => {
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setAddress(accounts[0])
        let w3 = new Web3(ethereum)
        setWeb3(w3)
      }).catch((err) => console.log(err))
    : console.log("Please install MetaMask")
  }, [])

    return (
      <div>
        Welcome to your homepage
      </div>
    )
}

export default Index