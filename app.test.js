
'use strict';

const request = require('supertest');
const app = require('./app');

describe('Test the goats service', () => {
    test('GET /random/ succeeds', () => {
        return request(app)
	    .get('/random/')
	    .expect(200);
    });

    test('GET /random/  returns JSON', () => {
        return request(app)
	    .get('/random/')
	    .expect('Content-type', /json/);
    });

    test('POST /goat/add succeeds', () => {
        const params = { name: 'Larry', fact: 'Larry is an impostor' };
        return request(app)
        .post('/goat/add')
        .send(params)
	    .expect(200);
    });
});
