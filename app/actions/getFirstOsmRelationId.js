const head = require('lodash/head');
const api = require('../api');

const { SERVICE_OSM_TYPE_DETAILS_URL } = require('../config')

const params = {
  addressdetails: 1,
  hierarchy: 0,
  group_hierarchy: 1,
  polygon_geojson: 1,
  format: 'json',
}

module.exports = async (data) => {
  const apiParams = {
    ...params,
    osmid: data.osm_id,
    osmtype: head(data.osm_type).toUpperCase(),
    class: data.class
  }

  const { address } = await api(SERVICE_OSM_TYPE_DETAILS_URL, apiParams);

  const { osm_id } = address.find(({ osm_type }) => osm_type === 'R');

  return osm_id;
}
