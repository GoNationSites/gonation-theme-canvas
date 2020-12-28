import React from 'react';

import getEndpoint from './getEndpoint';
import About from '../pageComponents/about';
import Home from '../pageComponents/home';
import Menu from '../pageComponents/menu';
import Gallery from '../pageComponents/gallery';
import Contact from '../pageComponents/contact';
import Events from '../pageComponents/events';

export default (type, props, gonationID) => {
  const dataEndpoints = props.data.allDataFetchingYaml.edges;
  switch (type) {
    case 'home':
      return (
        <Home
          data={props}
          endpoint={getEndpoint(dataEndpoints, ['meta'], gonationID)}
        />
      );
    case 'about':
      return (
        <About
          data={props}
          endpoint={getEndpoint(dataEndpoints, ['meta'], gonationID)}
        />
      );
    case 'events':
      return (
        <Events
          data={props}
          endpoint={getEndpoint(
            dataEndpoints,
            ['events', 'recurring'],
            gonationID
          )}
        />
      );
    case 'contact':
      return (
        <Contact
          data={props}
          endpoint={getEndpoint(dataEndpoints, ['meta'], gonationID)}
        />
      );
    case 'menu':
      return (
        <Menu
          data={props}
          endpoint={getEndpoint(dataEndpoints, ['menu'], gonationID)}
        />
      );
    case 'gallery':
      return (
        <Gallery
          data={props}
          endpoint={getEndpoint(dataEndpoints, ['gallery'], gonationID)}
        />
      );
    default:
      return '';
  }
};
