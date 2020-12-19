import React from 'react';

import CloudinaryHero from './cloudinary/cloudinaryHero';

const Hero = ({ heroData }) => {
  return <CloudinaryHero {...heroData} />;
};

export default Hero;
