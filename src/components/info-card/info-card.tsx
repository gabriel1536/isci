import React, { ReactComponentElement } from 'react';
import './styles.scss';

interface InfoCardProps {
  icon: string;
}

const InfoCard = (props: InfoCardProps): JSX.Element => {
  const { icon } = props;
  return (
    <div className='text-center rounded overflow-hidden shadow-lg info-card lg:info-card-mobile'>
      <div className='mt-4 text-4xl font-bold font-color-branding-red text-2vw'>
        Info
      </div>
      <div className='lg:inline-block hidden'>
        <img src={icon} alt='card-icon' className='info-img' />
      </div>
      <div className='inline-block px-2 py-4'>
        <p className='font-color-branding-red leading-tight text-opacity-75 text-base text-1vw'>
          Request more information about a tomorrow-proof education at the ISCI.
        </p>
      </div>
      <div className='mr-auto ml-auto pb-4'>
        <button className='inline-block font-color-branding-white rounded px-6 py-1 text-md font-semibold border info-button focus:outline-none shadow-none text-1vw'>
          photography
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
