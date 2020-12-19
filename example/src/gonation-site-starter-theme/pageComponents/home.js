import React from 'react';
import Hero from '../../components/Hero';

const home = () => {
  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-hero',
          height: 'calc(100vh - 246.75px)',
        }}></Hero>
    </div>
  );
};

export default home;
