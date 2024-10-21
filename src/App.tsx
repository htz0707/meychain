import React from 'react';
import Layout from './components/Layout';
import SectionTitle from './components/SectionTitle';
import './App.css';
import home from './assets/home.png';
import started from './assets/started.png';
import demo from './assets/demo.png';
import blank from './assets/blank.png';
import excuration from './assets/excuration.png';
import asset from './assets/asset.png';
import marketplace from './assets/marketplace.png';
import network from './assets/network.png';
import copy from './assets/copy.png';
import ethereum from './assets/ethereum.png';
import binance from './assets/binance_chain.png';
import base from './assets/base.png';
import arbitrum from './assets/arbitrum.png';
import polygon from './assets/polygon_cus.png';
import brc from './assets/brc.png';
import aptos from './assets/aptos.png';
import xi from './assets/xi_protocol.png';
import polkadot from './assets/polkadot.png';
import optimism from './assets/optimims.png';
import solana from './assets/solana.png';
import tron from './assets/tron.png';
import fantom from './assets/fantom.png';
import sui from './assets/sui.png';
import dogechain from './assets/dogechain.png';
import blast from './assets/blast.png';
import avalanche from './assets/avalanche.png';
import integration from './assets/integration.png';
import physic from './assets/physic.png';
import centerLogo from './assets/center_logo.png';
import realWorld from './assets/real_world.png';
import meyCoin from './assets/meycoin.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter_2.png';
import telegram from './assets/telegram.png';
import instagram from './assets/instagram.png';
import CarouselComponent from './components/CarouselComponent';

const App: React.FC = () => {
  return (
    <Layout>
      <section className='home-section'>
        <div className='meychain-container'>
          <img src={home} alt='home' className='home' />
          <p className='meychain'>Meychain</p>
        </div>
        <div className='intro-container'>
          <div className='intro-title'>
            <p>Bridging the Gap Between Physical Assets and the Digital World</p>
          </div>
          <div className='intro-description'>
            <p>The core of Mey Network, Meychain is a next-generation Layer 1 blockchain powering the secure, scalable, and efficient tokenization of Real-World Assets.</p>
          </div>
          <div className='button-group'>
            <button className='started'>
              <img src={started} alt='started' />
              <span>Get Started</span>
            </button>
            <div className='demo'>
              <img src={demo} alt='demo' />
              <span>Watch Demo</span>
            </div>
          </div>
        </div>
        <div className='overview-container'>
          <SectionTitle title='Overview' description='Why Meychain within Mey Network?' />
          <div className='mobile-overview-cards'>
            <img src={centerLogo} alt='center-logo' className='mobile-center-logo' />
            <CarouselComponent />
          </div>
          <div className='overview-cards'>
            <div className='top-left-card'>
              <img src={integration} alt='integration' />
              <p className='title'>MeyFi Integration</p>
              <p className='content'>Seamlessly interact with MeyFi, the financial services platform of Mey Network, to access decentralized finance (DeFi) applications powered by tokenized real-world assets</p>
            </div>
            <div className='top-right-card'>
              <img src={physic} alt='physic' />
              <div className='text'>
                <p className='title'>Physical Device Validation</p>
                <p className='content'>Secure the network with physical devices acting as validator nodes, ensuring transaction integrity and supporting high-demand applications like AR/VR.</p>
              </div>
            </div>
            <div className='center-logo'>
              <img src={centerLogo} alt='center_logo' />
            </div>
            <div className='bottom-left-card'>
              <img src={realWorld} alt='real-world' />
              <div className='text'>
                <p className='title'>Real-World Asset Integration</p>
                <p className='content'>Tokenize, trade, and manage fractional ownership of real estate and other physical assets on Meychain.</p>
              </div>
            </div>
            <div className='bottom-right-card'>
              <img src={meyCoin} alt='mey-coin' />
              <p className='title'>Meycoin (MEY) Powered Ecosystem</p>
              <p className='content'>Use Meycoin, the native currency of Mey Network, to pay transaction fees, earn rewards, and participate in governance.</p>
            </div>
          </div>
        </div>
        <div className='ar-container'>
          <SectionTitle title='AR/VR Integration' description='Immersive Real Estate Experience' />
          <div className='ar-quotes'>
            <p>'Experience real estate like never before with AR/VR technology, supported by Meychain’s decentralized infrastructure within the Mey Network. Explore properties in immersive 3D environments, enhancing your investment decisions.'</p>
          </div>
          <div className='banner'>
            <img src={blank} alt='blank' />
          </div>
        </div>
        <div className='modular-container'>
          <SectionTitle title='Modular' description={`Meychain's Modular Architecture`} />
          <div className='cards-group'>
            <div className='cards-group-top'>
              <div className='big-card'>
                <p className='title'>Consensus Layer</p>
                <p className='content'>Utilizes validator nodes for secure and efficient transaction validation, ensuring the network's integrity.</p>
              </div>
              <div className='small-card'>
                <img src={excuration} alt='excuration' className='small-card-img' />
                <p className='title'>Execution Layer</p>
                <p className='content'>Efficiently processes transactions and smart contracts, optimizing performance across the network.</p>
              </div>
            </div>
            <div className='cards-group-bottom'>
              <div className='small-card'>
                <img src={asset} alt='asset' className='small-card-img' />
                <p className='title'>Asset Integration Layer</p>
                <p className='content'>Manages the tokenization and transfer of RWAs, allowing for seamless interoperability between assets on Meychain.</p>
              </div>
              <div className='big-card'>
                <div className='text-box'>
                  <p className='title'>Storage Layer: Marketplace</p>
                  <p className='content'>Provides decentralized storage, essential for managing large data sets such as property records and transaction histories.</p>
                </div>
                <img src={marketplace} alt='marketplace' className='big-card-img' />
              </div>
            </div>
          </div>
        </div>
        <div className='network-container'>
          <SectionTitle title='Use Cases' description='Mey Network in Action' />
          <div className='network-bg'>
            <img src={network} alt='network' />
          </div>
          <div className='cards-group'>
            <div className='card'>
              <img src={copy} alt='' className='card-icon' />
              <p className='card-title'>Real Estate Tokenization</p>
              <p className='card-content'>Unlock liquidity and investment opportunities through fractional ownership of real estate, powered by Meychain and facilitated by MeyFi.</p>
            </div>
            <div className='card'>
              <img src={copy} alt='' className='card-icon' />
              <p className='card-title'>Decentralized Finance (DeFi)</p>
              <p className='card-content'>Leverage tokenized assets in DeFi applications on MeyFi, including P2P lending and staking.</p>
            </div>
            <div className='card'>
              <img src={copy} alt='' className='card-icon' />
              <p className='card-title'>Network Resource Sharing</p>
              <p className='card-content'>Contribute bandwidth and storage to support high-demand applications on Meychain, such as AR/VR streaming, and earn rewards.</p>
            </div>
          </div>
        </div>
        <div className='partners-container'>
          <SectionTitle title='' description='Our Partners' />
          <div className='partners-row'>
            <img src={ethereum} alt='ethereum' className='icon' />
            <img src={binance} alt='ethereum' className='icon' />
            <img src={base} alt='ethereum' className='icon' />
            <img src={arbitrum} alt='ethereum' className='icon' />
            <img src={polygon} alt='ethereum' className='icon' />
          </div>
          <div className='partners-row'>
            <img src={brc} alt='brc' className='icon' />
            <img src={aptos} alt='aptos' className='icon' />
            <img src={xi} alt='xi' className='icon' />
            <img src={polkadot} alt='polkadot' className='icon' />
          </div>
          <div className='partners-row'>
            <img src={optimism} alt='optimism' className='icon' />
            <img src={solana} alt='solana' className='icon' />
            <img src={tron} alt='tron' className='icon' />
            <img src={fantom} alt='fantom' className='icon' />
            <img src={sui} alt='sui' className='icon' />
          </div>
          <div className='partners-row'>
            <img src={dogechain} alt='dogechain' className='icon' />
            <img src={blast} alt='blast' className='icon' />
            <img src={avalanche} alt='avalanche' className='icon' />
          </div>
        </div>
        <div className='community'>
          <SectionTitle title='' description='Join the Mey Network Community' />
          <div className='cards-group'>
            <div className='card'>
              <img src={facebook} alt='facebook' />
              <div>
                <p className='title'>Facebook</p>
                <p className='followers'>240K Followers</p>
              </div>
            </div>
            <div className='card'>
              <img src={twitter} alt='twitter' />
              <div>
                <p className='title'>Twitter</p>
                <p className='followers'>240K Followers</p>
              </div>
            </div>
            <div className='card'>
              <img src={telegram} alt='telegram' />
              <div>
                <p className='title'>Telegram</p>
                <p className='followers'>240K Followers</p>
              </div>
            </div>
            <div className='card'>
              <img src={instagram} alt='instagram' />
              <div>
                <p className='title'>Instagram</p>
                <p className='followers'>240K Followers</p>
              </div>
            </div>
          </div>
        </div>
        <div className='join'>
          <SectionTitle title='' description='Start Your Journey with Mey Network' />
          <div className='button-group'>
            <button className='started'>
              <img src={started} alt='started' />
              <span>Get Started</span>
            </button>
            <div className='demo'>
              <img src={demo} alt='demo' />
              <span>Read Docs</span>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
};

export default App;
