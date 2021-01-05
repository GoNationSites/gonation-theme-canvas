/**
  @param endpoints (Array of endpoints)
  @param types (Array of types)
  @param id (String of GoNation ID's)
**/
export default (endpoints = [], types = [], ID = '') =>
  endpoints
    .filter(({ node }) => types.filter(type => type === node.data.type).length)
    .map(({ node }) => ({
      type: replaceParams(node.data.type, ID),
      url: replaceParams(node.data.url, ID),
    }));

const replaceParams = (txt, ID) => txt.replace('{GONATION_ID}', ID);
