import React from 'react';
import { graphql } from 'gatsby';

import About from '../pageComponents/about';
import Home from '../pageComponents/home';
import Menu from '../pageComponents/menu';
import Gallery from '../pageComponents/gallery';
import Contact from '../pageComponents/contact';
import Events from '../pageComponents/events';
import Layout from '../pageComponents/layout/layout';

const BasicTemplate = props => {
  const { type } = props?.pageContext?.pageContext;

  const getPageWrapper = type => {
    switch (type) {
      case 'home':
        return <Home data={props} />;
      case 'about':
        return <About data={props} />;
      case 'events':
        return <Events data={props} />;
      case 'contact':
        return <Contact data={props} />;
      case 'menu':
        return <Menu data={props} />;
      case 'gallery':
        return <Gallery data={props} />;
      default:
        return '';
    }
  };

  return <Layout data={props}>{getPageWrapper(type)}</Layout>;
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

    allPageDataYaml {
      edges {
        node {
          page {
            path
            title
            type
          }
        }
      }
    }
  }
`;
