import React from 'react';
import '../styles/SectionTitle.css';
import leftLine from '../assets/left_line.png';
import rightLine from '../assets/right_line.png';
import polygon from '../assets/polygon.png';

interface TitleProps {
  title: string;
  description: string;
}


const SectionTitle: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <div className='section-title-container'>
      {title.length > 0 &&
        <div className='section-title'>
          <img src={leftLine} alt='left-line' className='left-line' />
          <img src={polygon} alt='polygon' className='polygon' />
          <p>{title}</p>
          <img src={polygon} alt='polygon' className='polygon' />
          <img src={rightLine} alt='right-line' className='right-line' />
        </div>
      }
      <div className='section-description'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
