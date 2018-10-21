'use strict'

const express = require('express');
const fetch = require('node-fetch');
const config = require('../config');
const { hostname, path} = config.baseUrl;
const app = express.Router();

const generateUrlWeather = (city) => `https://${hostname}${path}/weather?q=${city}&units=metric&appid=${config.ApiKey}`;
const generateUrlForecast = (city) => `https://${hostname}${path}/forecast?q=${city}&units=metric&appid=${config.ApiKey}`;
const currentLocation = async () => {
    const location = await fetch('http://ip-api.com/json/');
    const response = await location.json();
    return response;
}

const currentWeather = async (city) => {
    const weather = await fetch(generateUrlWeather(city));
    const response = await weather.json();
    return response;
}

const forecastWeek = async (city) => {
    const forecast = await fetch(generateUrlForecast(city));
    const response = await forecast.json();
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
        let location;
        let currentCity;
        if (!city) {
            location = await currentLocation();
            currentCity = location.city;
        }
        const weatherToday = await currentWeather(city ? city: currentCity);
        res.send(weatherToday);
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
