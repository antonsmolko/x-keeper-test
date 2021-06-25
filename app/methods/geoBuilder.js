const getGeoByCityName = require('./getGeoByCityName');
const writeDataToFile = require('./writeDataToFile');

module.exports = async (cities) => {
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const data = await getGeoByCityName(city);

    writeDataToFile(city, JSON.stringify(data), 'geojson');
  }
}
