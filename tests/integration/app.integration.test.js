const request = require('supertest');
const app = require('../../app/index');

describe('Integration Tests', () => {
    test('Server should run and respond with 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

