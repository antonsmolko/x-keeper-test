const api = require('../api');
const head = require('lodash/head');

const { POLYGON_GEO_JSON_URL } = require('../config');

const params = {
  params: 0
}

module.exports = async (id) => {
  params.id = id;

  const { geometries } = await api(POLYGON_GEO_JSON_URL, params);
  const { coordinates } = head(geometries);

  return coordinates;
}
