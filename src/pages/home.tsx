import React from 'react';
import InfoCard from '../components/info-card/info-card';
import './styles.scss';

const Home = (): JSX.Element => {
  return (
    <div>
      <div className='md:flex md:justify-center info-cards-position hidden'>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <div className='info-cards-position md:hidden'>
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default Home;
