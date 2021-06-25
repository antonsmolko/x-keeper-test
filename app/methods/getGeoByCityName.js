const _ = require('lodash');

const getCityData = require('../actions/getCityData');
const getFirstOsmRelationId = require('../actions/getFirstOsmRelationId');
const getGeoById = require('../actions/getGeoById');

module.exports = async (cityName) => {
  const data = await getCityData(cityName);

  const relationId = await getFirstOsmRelationId(data);

  return await getGeoById(relationId)
}
