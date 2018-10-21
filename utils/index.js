const url = require('url');
const config = require('../config');
const { hostname, path} = config.baseUrl;

module.exports = {
    generateUrl: (city, type) => `https://${hostname}${path}/${type}?q=${city}&units=metric&appid=${config.ApiKey}`
};
