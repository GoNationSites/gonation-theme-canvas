import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export default async endpoint => {
  console.log('making req');

  try {
    return await axios({
      url: `${endpoint.url}`,
      adapter: jsonpAdapter,
      callbackParamName: 'c',
    }).json();
  } catch (e) {
    console.error(`Error fetching for ${endpoint.type}`, e);
  }

  //   return axios({
  //     url: `${endpoint.url}`,
  //     adapter: jsonpAdapter,
  //     callbackParamName: 'c',
  //   })
  //     .then(res => {
  //       return res.data;
  //     })
  //     .catch(e => console.error(`Error fetching for ${endpoint.type}`, e));
};
