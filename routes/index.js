const express = require('express');
const fetch = require('node-fetch');
const config = require('../config');
const { hostname, path} = config.baseUrl;
const app = express.Router();

const generateUrl = (city) => `https://${hostname}${path}?q=${city}&units=metric&appid=${config.ApiKey}`;

const currentLocation = async () => {
    const location = await fetch('http://ip-api.com/json/');
    const response = await location.json();
    return response;
}

const currentWeather = async (city) => {
    console.log(generateUrl(city || 'madrid'));
    const weather = await fetch(generateUrl(city || 'madrid'));
    const response = await weather.json();
    return response;
}

app.get('/', (req, res, err) => {
    res.send('hola word');
});

app.get('/location', async (req, res, err) => {
    try {
        const location = await currentLocation();
        res.send(location);
    } catch(err) {
        console.log(err)
    }
});

app.get('/current/:city?', async (req, res, err) => {
    try {
        const { city } = req.params;
        let param;
        if (!city) {
            location = await currentLocation();
            param = location.city;
        }
        const weatherToday = await currentWeather(city ? city: param);
        res.send(weatherToday);
    } catch(err) {
        console.log(err)
    }
})

module.exports = app;
