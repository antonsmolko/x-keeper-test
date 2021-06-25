const fs = require('fs');
const path = require('path');
const CyrillicToTranslit = require('cyrillic-to-translit-js');
const cyrillicToTranslit = new CyrillicToTranslit();

const getOutputPath = (outputDir) => path.join(__dirname, '..', outputDir);

module.exports = (city, json, dir) => {
  const filename = cyrillicToTranslit.transform(city.toLowerCase(), "_");
  const outputPath = getOutputPath(dir);
  const filePath = path.resolve(outputPath, `${filename}.json`)

  fs.writeFileSync(filePath, json, { encoding: 'utf8', flag: 'a'});

  console.log(`${city} - DONE`)
}
