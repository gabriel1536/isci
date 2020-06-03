import React, { ReactComponentElement } from 'react';
import './styles.scss';
import { ReactComponent as Info } from '../../assets/icons/info.svg';

interface InfoCardProps {
  icon: string;
}

const InfoCard = (): JSX.Element => {
  return (
    <div className='text-center rounded overflow-hidden shadow-lg info-card'>
      <div className='mt-4 text-4xl font-bold font-color-branding-red'>
        Info
      </div>
      {/* <img src={img} className='inline-block info-img' alt='img' /> */}
      <div className='inline-block'>
        <Info />
      </div>
      <div className='md:inline-block md:px-2 md:py-4 hidden'>
        <p className='font-color-branding-red leading-tight text-opacity-75 text-base text-xs'>
          Request more information about a tomorrow-proof education at the ISCI.
        </p>
      </div>
      <div className='mr-auto ml-auto pb-4'>
        <button className='inline-block font-color-branding-white rounded px-6 py-1 text-md font-semibold border info-button focus:outline-none shadow-none'>
          photography
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
