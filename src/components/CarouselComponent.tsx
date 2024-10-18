// CarouselComponent.tsx
import React from 'react';
import Slider from 'react-slick';
import '../styles/CarouselComponent.css';
import integration from '../assets/integration.png';
import physic from '../assets/physic.png';
import realWorld from '../assets/real_world.png';
import meyCoin from '../assets/meycoin.png';

interface CarouselSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
  autoplay: boolean;
}

const CarouselComponent: React.FC = () => {
  const settings: CarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <img src={integration} alt='integration' />
            </div>
            <h2 className="card-title">MeyFi Integration</h2>
            <p className="card-description">
              Seamlessly interact with MeyFi, the financial services platform of Mey Network, to access decentralized finance (DeFi) applications powered by tokenized real-world assets.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <img src={physic} alt='physic' />
            </div>
            <h2 className="card-title">Physical Device Validation</h2>
            <p className="card-description">
              Secure the network with physical devices acting as validator nodes, ensuring transaction integrity and supporting high-demand applications like AR/VR.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <img src={realWorld} alt='realWorld' />
            </div>
            <h2 className="card-title">Real-World Asset Integration</h2>
            <p className="card-description">
            Tokenize, trade, and manage fractional ownership of real estate and other physical assets on Meychain.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <img src={meyCoin} alt='meyCoin' />
            </div>
            <h2 className="card-title">MeyFi Integration</h2>
            <p className="card-description">
              Seamlessly interact with MeyFi, the financial services platform of Mey Network, to access decentralized finance (DeFi) applications powered by tokenized real-world assets.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
