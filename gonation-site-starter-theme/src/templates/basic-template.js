import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../pageComponents/layout/layout';
import GoNationContext from '../context/GoNationContext';
import getPageWrapper from '../helpers/getPageWrapper';

const BasicTemplate = props => {
  const { type } = props?.pageContext?.pageContext;
  const dataEndpoints = props.data.allDataFetchingYaml.edges;
  const { gonationID } = props.data.businessData;

  return (
    <GoNationContext.Provider
      value={{
        businessData: props.data.businessData,
        allPages: props.data.allPageDataYaml,
        pageContext: props.pageContext,
        dataEndpoints,
      }}>
      <Layout data={props}>{getPageWrapper(type, props, gonationID)}</Layout>
    </GoNationContext.Provider>
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

    allDataFetchingYaml {
      edges {
        node {
          data {
            type
            url
          }
        }
      }
    }
  }
`;
