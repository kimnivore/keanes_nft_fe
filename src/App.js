import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
// import { ethers } from 'ethers';
// import KeanesNFT from  './utils/KeanseNFT.json';
import NavBar from "./components/NavBar";
import Home from './components/Home';
// import Welcome from './components/Welcome';
import NFT from './components/NFT';
// import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Game from './components/Game/Game';
import './styles/App.css';
// import { Button, notification, Popover } from 'antd';
// import Banner from './assets/KeanesBanner.png';
// import Kirby from './assets/Kirby16bit.png';

// const TOTAL_MINT_COUNT = 100;
// const CONTRACT_ADDRESS = '0xd48FE8c4692B93B111E04BE74A585F5c55680edf';


function App() {
  // const [currentAccount, setCurrentAccount] = useState('');
  // const [nftCount, setNftCount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // const getNftCount = async () => {
  //   const { ethereum } = window;
  //   if(ethereum) {
  //     const provider = new ethers.providers.Web3Provider(ethereum);
  //     const signer = provider.getSigner();
  //     const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, KeanesNFT.abi, signer);

  //     const no = await connectedContract.getTotalNFTsMintedSoFar();
  //     setNftCount(no.toString());
  //   }
  // }

  // const checkIfWalletIsConnected = async () => {
  //   const { ethereum } = window;
  //   if(!ethereum) {
  //     console.log('Make sure you have metamask');
  //     return;
  //   } else {
  //     console.log('We have the ethereum object', ethereum);
  //   }

  //   const accounts = await ethereum.request({ method: 'eth_accounts' });
  //   if(accounts.length !== 0) {
  //     const account = accounts[0];
  //     console.log('Found an authorized account:', account);
  //     setCurrentAccount(account);
  //     setupEventListener()
  //   } else {
  //     console.log('No authorized account found');
  //   }
  // }

  // const connectWallet = async () => {
  //   try {
  //     const { ethereum } = window;
  //     if (!ethereum) {
  //       alert('Get MetaMask to connect your wallet');
  //       return;
  //     }

  //     const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  //     console.log('Connected', accounts[0]);
  //     setCurrentAccount(accounts[0]);
  //     setupEventListener()
  //   } catch(error) {
  //     console.log(error);
  //   }
  //   }

  // const setupEventListener = async () => {
  //   try {
  //     const { ethereum } = window;
  //     if(ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, KeanesNFT.abi, signer);
  //       connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
  //         console.log(from, tokenId.toNumber())
  //         console.log(`Hey there! We've minted your NFT and sent it to your wallet. Here's the link: http://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
  //       });
  //       console.log('Setup event listener')
  //     } else {
  //       console.log("Ethereum object doesn't exist");
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const askContractToMintNft = async () => {
  //   try {
  //     const { ethereum } = window;
  //     if(ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, KeanesNFT.abi, signer);

  //       console.log('Popping wallet to pay gas...');
  //       let nftTxn = await connectedContract.makeAnEpicNFT();
  //       setIsLoading(true)
  //       console.log('Mining...please wait.');
  //       await nftTxn.wait();
  //       setIsLoading(false)
  //       console.log(nftTxn);
  //       console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
  //       openNotification()
  //     } else {
  //       console.log("Ethereum object doesn't exist!");
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const openNotification = () => {
  //   notification.open({ 
  //     message: 'Success!',
  //     description: `We've minted your NFT and sent it to your wallet. Click the link below to view on OpenSea`,
  //     onClick: () => {
  //       console.log('Notification clicked');
  //     }
  //   })
  // }

  // useEffect(() => {
  //   checkIfWalletIsConnected();  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])   

  // useEffect(() => {
  //   getNftCount();
  // })

  // // Render Methods
  // const renderNotConnectedContainer = () => (
  //   <Popover content="Connect to your MetaMask wallet">
  //     <Button onClick={connectWallet} className="cta-button connect-wallet-button">
  //       Connect to Wallet
  //     </Button>
  //   </Popover>
  // );

  // const renderMintUI = () => (
  //   <Popover content="Click to mint a special Kirby-word NFT">
  //     <Button onClick={askContractToMintNft} className="cta-button connect-wallet-button">
  //       Mint NFT
  //     </Button>
  //   </Popover>
  // )

  return (
    <div className="App">
      <NavBar/>
      <div className="container-app">
        <Routes>
          <Route path='NFT' element={<NFT />} />
          <Route path='Game' element={<Game />} />
          <Route path='Gallery' element={<Gallery />} />
          <Route path='/' element={<Home isLoading={isLoading}/>} />
        </Routes>
      </div>
     
    </div>
  );
};

export default App;
