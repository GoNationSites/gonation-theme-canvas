import React from 'react';
import { graphql } from 'gatsby';

import About from '../pageComponents/about';
import Home from '../pageComponents/home';
import Menu from '../pageComponents/menu';
import Gallery from '../pageComponents/gallery';
import Contact from '../pageComponents/contact';
import Events from '../pageComponents/events';

// import getPageWrapper from '../helpers/getPageWrapper';

const BasicTemplate = props => {
  const { type } = props?.pageContext?.pageContext;

  const getPageWrapper = type => {
    switch (type) {
      case 'home':
        return <Home props={props} />;
      case 'about':
        return <About props={props} />;
      case 'events':
        return <Events props={props} />;
      case 'contact':
        return <Contact props={props} />;
      case 'menu':
        return <Menu props={props} />;
      case 'gallery':
        return <Gallery props={props} />;
      default:
        return '';
    }
  };

  return (
    <div>
      <h1>Page Type: {type}</h1>
      {getPageWrapper(type)}
    </div>
  );
};

export default BasicTemplate;

export const query = graphql`
  {
    businessData {
      name
      avatar {
        imageBaseUrl
        imagePrefix
        isDefault
      }
      city
      cover {
        imageBaseUrl
        imagePrefix
        isDefault
      }
      desc
      links {
        facebook
        instagram
        twitter
        website
        youtube
      }
      phone
      slug
      state
      street
      zip
      loc
      gonationID
    }
  }
`;
