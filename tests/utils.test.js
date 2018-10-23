const test = require('ava');
const { generateUrl } = require('../utils');

test('generate url', t => {
    t.is(typeof(generateUrl('london', 'weather')), 'string')
})
