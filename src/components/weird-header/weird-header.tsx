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
          className='flex-shrink-0 ml-auto responsive-imgs isologo'
          alt='isologo'></img>
      </div>
    </div>
  );
};

export default WeirdHeader;
