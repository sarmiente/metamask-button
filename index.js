const sendEthButton = document.querySelector('.sendEthButton');
const showAccount = document.querySelector('.showAccount');


let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0xd221F7bFFcB92093fAe89EcC91808568ea3555f1',
          value: '0x29a2241af62c00',
          gasPrice: '',
          gas: '',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.log(error));
});

async function connectWallet(){
    accounts = await window.ethereum.request({
         method: "eth_requestAccounts"
     }).catch((err) => {
         console.log(err)
     })
     showAccount.innerHTML = accounts;
 }


