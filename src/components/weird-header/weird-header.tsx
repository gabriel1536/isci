import React from 'react';
import './styles.scss';
import isci from '../../assets/isci.png';
import playvideo from '../../assets/playvideo.png';

const WeirdHeader = (): JSX.Element => {
  return (
    <div className='weird-header'>
      <div className='flex items-center'>
        <img
          src={isci}
          className='flex-shrink-0 ml-auto mr-8 mt-8 responsive-imgs isologo'
          alt='isologo'></img>
      </div>
      <div className='flex items-center'>
        <button className='flex-shrink-0 ml-auto mr-8 mt-6 max-w-full h-auto responsive-imgs play-video'>
          <img src={playvideo} alt='isologo'></img>
        </button>
      </div>
    </div>
  );
};

export default WeirdHeader;
