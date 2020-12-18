const path = require(`path`);

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
