const path = require(`path`);
const axios = require('axios');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query pageQuery {
      allPageDataYaml {
        edges {
          node {
            page {
              type
              title
              path
            }
          }
        }
      }
    }
  `);
  result.data.allPageDataYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.page.path,
      component: path.resolve(`${__dirname}/src/templates/basic-template.js`),
      context: {
        pageContext: node.page,
        slug: node.page.path,
      },
    });
  });
};

exports.sourceNodes = async (
  { createNodeId, actions, createContentDigest },
  options
) => {
  const { createNode } = actions;
  const { gonationID } = options;
  const fetchSiteData = async () => {
    try {
      return axios.get(
        `https://data.gonation.com/profile/getname/?profile_id=${gonationID}`
      );
    } catch {
      console.log(e);
    }
  };

  const siteData = await fetchSiteData();
  siteData.data.gonationID = gonationID;

  createNode({
    ...siteData.data,
    id: createNodeId(`${siteData.data.name}`),
    parent: null,
    children: [],
    internal: {
      type: `businessData`,
      content: JSON.stringify(siteData.data),
      contentDigest: createContentDigest(siteData.data),
    },
  });
};
