import React from 'react';
import './styles.scss';

interface InfoCardProps {
  icon: string;
}

const InfoCard = (props: InfoCardProps): JSX.Element => {
  const { icon } = props;
  return (
    <div className='text-center rounded border border-gray-300 overflow-hidden info-card lg:info-card-mobile'>
      <div className='mt-4 text-4xl font-bold font-color-branding-red text-2vw lg:text-2-5vw'>
        Info
      </div>
      <div className='flex flex-col justify-center px-2'>
        <p className='font-color-branding-red leading-tight text-opacity-75 text-base text-1vw lg:text-1-5vw'>
          Request more information about a tomorrow-proof education at the ISCI.
        </p>
      </div>
      <div className='mr-auto ml-auto py-4'>
        <button className='inline-block focus:outline-none'>
          <img src={icon} alt='card-icon' className='info-img lg:info-img-5' />
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
