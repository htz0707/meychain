import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.svg';
import { useAccount, useConnect, useDisconnect, useBalance, configureChains, createClient, WagmiConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import { Chain } from 'wagmi';

const Header: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector({ }),
  });
  const { disconnect } = useDisconnect();

  const { data: balance } = useBalance({
    address: address,
    watch: true,
  });

  return (
      <header className='header'>
        <div className='container'>
          <nav>
            <ul className='nav-list'>
              <li className='logo-container'>
                <a href='#' className='nav-link'>
                  <div><img src={logo} alt='Logo' className='logo' /></div>
                </a>
              </li>
              <li className='desktop-link'>
                <a href='#' className='nav-link'>
                  Why MeyFi
                </a>
              </li>
              <li className='desktop-link'>
                <a href='#' className='nav-link'>
                  Features
                </a>
              </li>
              <li className='desktop-link'>
                <a href='#' className='nav-link'>
                  How it works
                </a>
              </li>
              <li className='desktop-link'>
                <a href='#' className='nav-link'>
                  About
                </a>
              </li>
              <li className='desktop-link'>
                <a href='#' className='nav-link'>
                  Docs
                </a>
              </li>
            </ul>
          </nav>
          {isConnected ? (
            <>
              <p>
                <span className='show-balance'>
                  Id: {!!address && `${address.slice(0, 4)}...${address.slice(-3)} - Balance: `}
                </span>
                <span>{balance?.formatted} {balance?.symbol}</span>
              </p>
              <button onClick={() => disconnect()} className='connect-wallet'>Disconnect Wallet</button>
            </>
          ) : (
            <button onClick={() => connect()} className='connect-wallet'>Connect Wallet</button>
          )}
        </div>
      </header>
  );
};

export default Header;
