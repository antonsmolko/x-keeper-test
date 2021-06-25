const head = require('lodash/head');
const api = require('../api');

const { SERVICE_SEARCH_URL } = require('../config')

const params = {
  polygon_geojson: 1,
  format: 'json',
}

module.exports = async (city) => {
  params.q = city;

  const data = await api(SERVICE_SEARCH_URL, params);

  return head(data);
}








