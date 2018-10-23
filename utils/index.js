const config = require('../config');
const { hostname, path} = config.baseUrl;

module.exports = {
    generateUrl: (city, type) => `https://${hostname}${path}/${type}?q=${city}&units=metric&appid=${config.ApiKey}`,
    handleError: (error, res) => { 
        res.status(500).json({
            message: 'An error acurred',
            error
        })
    }
};
