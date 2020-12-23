import React from 'react';
import { Button } from 'theme-ui';

import Hero from '../../components/Heros/Hero';
import HeroWrapper from '../../components/heros/HeroWrapper';
import Heading from '../../components/Styled_UI/Heading';

const home = () => {
  // todo add a 'config' file for most things with configuration settings. eg make a config file for this file and fill out with data below.
  return (
    <>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-hero',
          height: 'calc(75vh)',
          maxWidth: 2000,
        }}>
        <HeroWrapper>
          <Heading sx={{ fontSize: [5, 6, 7] }}>
            A spirited neighborhood restaurant, and gathering place.
          </Heading>
          <Button variant='primary' sx={{ mr: [3, 5] }}>
            Order Online
          </Button>
          <Button variant='secondary' sx={{ mt: 2 }}>
            Make A Reservation
          </Button>
        </HeroWrapper>
      </Hero>
    </>
  );
};

export default home;
