'use strict'

const express = require('express');
const app = express.Router();
const { 
    currentLocation,
    currentWeather,
    forecastWeek
} = require('../services');
const { handleError } = require('../utils');

app.get('/', (req, res, err) => {
    res.send('is the magic');
});

app.get('/location', async (req, res) => {
    try {
        const location = await currentLocation();
        res.status(200).send(location);
    } catch(error) {
        handleError(error, res)
    }
});

app.get('/current/:city?', async (req, res) => {
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
    } catch(error) {
        handleError(error, res)
    }
});

app.get('/forecast/:city?', async (req, res) => {
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
    } catch(error) {
        handleError(error, res)
    }
});

module.exports = app;
