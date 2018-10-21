'use strict'

const test = require('ava');
const request = require('supertest');
const server = require('../index');

test('check status', async t => {
    const response = await request(server).get('/v1');
    t.is(response.status, 200);
    t.deepEqual(response.body, {
        status: 'Ok'
    });
})

test('check /current', async t => {
    const response = await request(server).get('/v1/current');
    t.is(response.status, 201);
    t.truthy({});
})

test('check /current/:city', async t => {
    const city = 'London';
    const response = await request(server).get(`/v1/forecast/${city}`);
    t.is(response.status, 201);
    t.truthy({});
})

test('check /forecast', async t => {
    const response = await request(server).get('/v1/forecast');
    t.is(response.status, 201);
    t.truthy({});
})

test('check /forecast/:city', async t => {
    const city = 'Buenos Aires';
    const response = await request(server).get(`/v1/forecast/${city}`);
    t.is(response.status, 201);
    t.truthy({});
})
