import React from 'react';
import Hero from '../../components/Heros/Hero';

const contact = () => {
  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-contact-hero',
          height: 'calc(100vh - 246.75px)',
          maxWidth: 2000,
          mainTitle: '',
        }}></Hero>
    </div>
  );
};

export default contact;
