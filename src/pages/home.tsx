import React from 'react';
import InfoCard from '../components/info-card/info-card';
import InfoButton from '../components/info-button/info-button';
import './styles.scss';
import Info from '../assets/icons/info.png';
import Admission from '../assets/icons/admission.png';
import Apply from '../assets/icons/apply.png';
import Pricing from '../assets/icons/pricing.png';

const Home = (): JSX.Element => {
  return (
    <div>
      <div className='md:flex md:justify-center mt-6 hidden'>
        <InfoCard icon={Info} />
        <InfoCard icon={Apply} />
        <InfoCard icon={Pricing} />
        <InfoCard icon={Admission} />
      </div>
      <div className='flex justify-center md:hidden'>
        <InfoButton icon={Info} label='Info' />
        <InfoButton icon={Apply} label='Apply' />
        <InfoButton icon={Pricing} label='Pricing' />
        <InfoButton icon={Admission} label='Admission' />
      </div>
    </div>
  );
};

export default Home;
