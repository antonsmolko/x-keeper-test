const buildGeo = require('./methods/geoBuilder');
const getCityNames = require('./actions/getCityNames');

const cities = getCityNames('/docs/cities.txt');

buildGeo(cities);
