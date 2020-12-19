import React from 'react';
import Hero from '../../components/Hero';

const about = () => {
  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-about-hero',
          height: 'calc(100vh - 246.75px)',
        }}></Hero>
    </div>
  );
};

export default about;
