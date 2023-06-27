const request = require('supertest');
const express = require('express');
const routes = require('../../routes/router');

const app = express();
app.use(express.json());
app.use('/api/v1', routes);

describe('GET /api/v1/hello', () => {
  it('should respond with "Hello unknown !" when no name query parameter is provided', async () => {
    const response = await request(app).get('/api/v1/hello');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello unknown !');
  });

  it('should respond with "Hello {name}" when a name query parameter is provided', async () => {
    const response = await request(app).get('/api/v1/hello?name=John');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello John !');
  });
});