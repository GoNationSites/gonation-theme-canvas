import React from 'react';
import Hero from '../../components/Heros/Hero';

const events = () => {
  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-events-hero',
          height: 'calc(85vh - 246.75px)',
          maxWidth: 2000,
          mainTitle: '',
        }}></Hero>
    </div>
  );
};

export default events;
