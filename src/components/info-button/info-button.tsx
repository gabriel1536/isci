import React from 'react';

interface InfoButtonProps {
  icon: string;
  label: string;
}

const InfoButton = (props: InfoButtonProps): JSX.Element => {
  const { icon, label } = props;

  return (
    <div className='flex flex-col justify-center'>
      <button className='focus:outline-none'>
        <img src={icon} alt='card-icon' className='flex w-12 mx-4 mt-4' />
      </button>
      <span className='flex justify-center text-xs'>{label}</span>
    </div>
  );
};

export default InfoButton;
