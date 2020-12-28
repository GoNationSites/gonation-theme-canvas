import React from 'react';
import Hero from '../../components/Heros/Hero';
import useApiRequest from '../../hooks/useAPIRequest';

const Contact = props => {
  // todo move this hook into the basic-template.js component to make default data fetching and data for each page.
  const { error, isLoaded, data } = useApiRequest(props.endpoint[0].url);
  console.log('error: ', error, 'data: ', data);
  return (
    <div>
      <Hero
        heroData={{
          imageName: 'sites/ponza/ponza-contact-hero',
          height: 'calc(85vh - 246.75px)',
          maxWidth: 2000,
          mainTitle: '',
        }}></Hero>
    </div>
  );
};

export default Contact;
