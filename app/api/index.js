const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');

module.exports = async (url, params) => {
  const resultUrl = new URL(url);
  resultUrl.search = new URLSearchParams(params).toString();

  const response = await fetch(resultUrl);

  return await response.json();
}
