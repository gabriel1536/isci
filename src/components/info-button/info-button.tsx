import React from 'react';

interface InfoButtonProps {
  icon: string;
}

const InfoButton = (props: InfoButtonProps): JSX.Element => {
  const { icon } = props;

  return (
    <div className='inline-block'>
      <img src={icon} alt='card-icon' />
    </div>
  );
};

export default InfoButton;
