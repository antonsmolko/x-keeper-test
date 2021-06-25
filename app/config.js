const SERVICE_BASE_URL = 'https://nominatim.openstreetmap.org';

module.exports = Object.freeze({
  SERVICE_SEARCH_URL: `${SERVICE_BASE_URL}/search.php`,
  SERVICE_OSM_TYPE_DETAILS_URL: `${SERVICE_BASE_URL}/details.php`,
  POLYGON_GEO_JSON_URL: 'http://polygons.openstreetmap.fr/get_geojson.py',
});
