import React from 'react';
import InfoCard from '../components/info-card/info-card';
import InfoButton from '../components/info-button/info-button';
import './styles.scss';
import Info from '../assets/icons/info.svg';

const Home = (): JSX.Element => {
  return (
    <div>
      <div className='sm:flex sm:justify-center info-cards-position hidden'>
        <InfoCard icon={Info} />
        <InfoCard icon={Info} />
        <InfoCard icon={Info} />
        <InfoCard icon={Info} />
      </div>
      <div className='flex justify-center sm:hidden'>
        <InfoButton icon={Info} />
      </div>
    </div>
  );
};

export default Home;
