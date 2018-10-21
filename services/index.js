'use strict'

const fetch = require('node-fetch');
const { generateUrl } = require('../utils');

const TYPE_WEATHER = 'weather';
const TYPE_FORECAST = 'forecast';

const currentLocation = async () => {
    const location = await fetch('http://ip-api.com/json/');
    const response = await location.json();
    return response;
}

const currentWeather = async (city) => {
    const weather = await fetch(generateUrl(city, TYPE_WEATHER));
    const response = await weather.json();
    return response;
}

const forecastWeek = async (city) => {
    const forecast = await fetch(generateUrl(city, TYPE_FORECAST));
    const response = await forecast.json();
    return response;
}

module.exports = {
    currentLocation,
    currentWeather,
    forecastWeek
};
