'use strict'

const express = require('express');
const app = express.Router();
const { 
    currentLocation,
    currentWeather,
    forecastWeek 
} = require('../services');

app.get('/', (req, res, err) => {
    res.send('is the magic');
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
        let location;
        let currentCity;
        if (!city) {
            location = await currentLocation();
            currentCity = location.city;
        }
        const weatherToday = await currentWeather(city ? city: currentCity);
        res.status(201).send(weatherToday);
    } catch(err) {
        console.log(err)
    }
})

app.get('/forecast/:city?', async (req, res, err) => {
    try {
        const { city } = req.params;
        let location;
        let currentCity;
        if (!city) {
            location = await currentLocation();
            currentCity = location.city;
        }
        const forecast = await forecastWeek(city ? city : currentCity); 
        res.status(201).send(forecast);
    } catch(err) {
        console.log(err)
    }
})
module.exports = app;
