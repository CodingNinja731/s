const request = require('supertest');
const app = require('../index'); // We will need to export the app from index.js

describe('API Root Endpoint', () => {
  it('should return a 200 OK status and a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Student Guidance Platform API is running!');
  });
});
